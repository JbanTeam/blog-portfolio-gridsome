<template>
  <Layout>
    <div class="img-wrap">
      <g-image class="img" alt="geek" src="~/assets/code.jpg" />
    </div>
    <main class="main pt-5">
      <h1 class="title text-center mb-3">Welcome to my portfolio/blog website</h1>
      <p class="desc projects-desc text-center">Here You can find posts about web-programming and to see my works.</p>
      <div class="form-group sort-wrapper">
        <div>
          <label for="sort">Sort by:</label>
          <select class="form-control form-control-sm" id="sort" v-model="tag">
            <option v-for="tag in this.tags" :key="tag">{{tag}}</option>
          </select>
        </div>
      </div>
      <ProjectList :projects="this.projects" />
    </main>
  </Layout>
</template>

<script>
import ProjectList from "~/components/works/ProjectList";
export default {
  metaInfo: {
    title: "Home"
  },
  created() {
    // console.log(this.tags);
  },
  data() {
    return {
      tag: "All"
    };
  },
  computed: {
    projects() {
      let projects = this.$page.allProjectsArr.edges[0].node.projects;
      if (this.tag === "All") return projects;
      else {
        projects = projects.filter(proj => {
          return proj.tags.includes(this.tag) || proj.src === this.tag;
        });
        return projects;
      }
    },
    tags() {
      let tags = [];
      this.$page.allProjectsArr.edges[0].node.projects.forEach(proj => {
        tags.push(...proj.tags);
      });
      tags = ["All", "Source code", "Site", ...new Set(tags)];
      return tags;
    }
  },
  components: {
    ProjectList
  }
};
</script>
<page-query>
query {
  allProjectsArr {
    edges {
      node {
        projects {
          name,
          link,
          desc,
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
