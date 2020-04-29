<template>
  <Layout>
    <main class="posts">
      <h1 class="title text-center mb-5">My blog is here</h1>
      <PostList />
      <!-- <PostList v-for="year in years" :key="year" :year="year" /> -->
    </main>
  </Layout>
</template>

<script>
import PostList from "@/components/posts/PostList";
export default {
  components: {
    PostList
  },
  metaInfo: {
    title: "Blog"
  },
  computed: {
    years() {
      const years = {};
      const posts = this.$page.allPost.edges;
      posts.map(post => {
        const year = post.node.date.split(" ")[2];
        years[year] = "";
      });
      return Object.keys(years).sort((a, b) => {
        return b - a;
      });
    }
  }
};
// // allPost(filter: { arr: { eq: null }}) {
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
        image
        description
        date (format: "MMM D YYYY")
        path
      }
    }

  }
}
</page-query>

<style>
.posts {
  /* margin-bottom: 44px; */
}
</style>
