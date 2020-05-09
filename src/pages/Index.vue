<template>
  <Layout>
    <div class="img-wrap">
      <!-- <g-image class="img" alt="geek" src="~/assets/codeIcon.svg" /> -->
      <CodeIcon />

    </div>
    <main class="main pt-5">
      <h1 class="title text-center mb-3">{{this.$lang.home[curLang].title}}</h1>
      <p class="desc projects-desc text-center">{{this.$lang.home[curLang].desc}}</p>
      <div class="form-group sort-wrapper">
        <SortAll :lang="curLang" :tags="tags" :sortTag="tag" :selectOpts="initialSelectOpts" @tagChange="onTagChange($event)" />
        <!-- <div>
          <label for="sort">Sort by:</label>
          <select class="form-control form-control-sm" id="sort" v-model="tag">
            <option v-for="tag in this.tags" :key="tag">{{tag}}</option>
          </select>
        </div> -->
      </div>
      <ProjectList :projects="this.projects" />
    </main>
  </Layout>
</template>

<script>
import ProjectList from "~/components/works/ProjectList";
import CodeIcon from "~/components/CodeIcon";
import SortAll from "@/components/sort/SortAll";
export default {
  metaInfo: {
    title: "Home"
  },
  components: {
    ProjectList,
    CodeIcon,
    SortAll
  },
  created() {
    let lang = localStorage.getItem("mylang");
    if (lang) {
      this.curLang = lang;
      this.tag = this.initialSelectOpts[this.curLang][0];
    }
    this.localTags = [...this.initialSelectOpts[this.curLang]];
  },
  mounted() {
    this.$eventBus.$on("changeLang", this.onLangChange);
  },
  data() {
    return {
      curLang: "en",
      tag: "All",
      localTags: [],
      initialSelectOpts: {
        en: ["All", "Source code", "Site"],
        rus: ["Все", "Исходный код", "Сайт"]
      }
    };
  },
  computed: {
    projects() {
      // TODO: projects src localization
      let projects = this.$page.allProjectsArr.edges[0].node.projects;
      if (this.tag === "All" || this.tag === "Все") return projects;
      else {
        let index = this.initialSelectOpts[this.curLang].indexOf(this.tag);
        projects = projects.filter(proj => {
          return (
            proj.tags.includes(this.tag) ||
            proj.src === this.initialSelectOpts.en[index]
          );
        });
        return projects;
      }
    },
    tags() {
      let tags = [];
      this.$page.allProjectsArr.edges[0].node.projects.forEach(proj => {
        tags.push(...proj.tags);
      });
      tags = [...this.localTags, ...new Set(tags)];
      return tags;
    }
  },
  methods: {
    onTagChange(tag) {
      this.tag = tag;
    },
    onLangChange(lang) {
      let index = this.initialSelectOpts[this.curLang].indexOf(this.tag);
      if (index !== -1) this.tag = this.initialSelectOpts[lang][index];
      this.curLang = lang;
      this.localTags = [...this.initialSelectOpts[this.curLang]];
    }
  }
};
</script>
<page-query>
query {
  allProjectsArr {
    edges {
      node {
        projects {
          name {
            en
            rus
          },
          link,
          desc {
            en
            rus
          },
          src,
          image,
          tags
        }
      }
    }
  }
}
</page-query>

<style>
.projects-desc {
  margin: 0px 0px 26px 0px;
}

.img-wrap {
  max-width: 100px;
  margin: auto;
}
.img-wrap img {
  max-width: 100%;
}
</style>
