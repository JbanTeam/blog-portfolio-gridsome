<template>
  <Layout>
    <main class="posts">
      <h1 class="title text-center mb-4">{{this.$lang.blog[curLang].title}}</h1>
      <div class="form-group sort-wrapper">

        <SortDate :lang="curLang" @dateChange="onDateChange($event)" />
        <SortAll :lang="curLang" :tags="tags" :sortTag="tag" :selectOpts="initialSelectOpts" @tagChange="onTagChange($event)" />

      </div>
      <PostList :posts="posts" :curLang="curLang" />
    </main>
  </Layout>
</template>

<script>
import PostList from "@/components/posts/PostList";
import SortAll from "@/components/sort/SortAll";
import SortDate from "@/components/sort/SortDate";
export default {
  components: {
    PostList,
    SortAll,
    SortDate,
  },
  metaInfo: {
    title: "Blog",
  },
  created() {
    let lang;
    if (process.isClient) {
      lang = localStorage.getItem("mylang");
    }
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
      date: "Newer",
      localTags: [],
      initialSelectOpts: {
        en: ["All"],
        rus: ["Все"],
      },
    };
  },
  computed: {
    posts() {
      let posts = [];
      if (this.tag === "All" || this.tag === "Все")
        posts = this.$page.allPost.edges;
      else {
        posts = this.$page.allPost.edges.filter((post) => {
          return post.node.tags.includes(this.tag);
        });
      }
      posts.sort((a, b) => {
        if (this.date === "Older" || this.date === "Сначала старые")
          return Date.parse(a.node.date) - Date.parse(b.node.date);
        else return Date.parse(b.node.date) - Date.parse(a.node.date);
      });
      return posts;
    },
    tags() {
      let tags = [];
      this.$page.allPost.edges.forEach((post) => {
        tags.push(...post.node.tags);
      });
      tags = [...this.localTags, ...new Set(tags)];
      return tags;
    },
  },
  methods: {
    onDateChange(date) {
      this.date = date;
    },
    onTagChange(tag) {
      this.tag = tag;
    },
    onLangChange(lang) {
      let index = this.initialSelectOpts[this.curLang].indexOf(this.tag);
      if (index !== -1) this.tag = this.initialSelectOpts[lang][index];
      this.curLang = lang;
      this.localTags = [...this.initialSelectOpts[this.curLang]];
    },
  },
};
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        tags
        image
        tags
        description
        date (format: "MMM D YYYY")
        path
      }
    }

  }
}
</page-query>

<style>
</style>
