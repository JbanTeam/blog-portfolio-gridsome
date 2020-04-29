<template>
  <div class="container">
    <!-- <div class="row no-gutters flex-column"> -->
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      <PostItem v-for="post in this.posts" :key="post.node.id" :post="post.node" />
    </div>
  </div>
</template>

<script>
import PostItem from "./PostItem";

export default {
  props: ["year"],
  components: {
    PostItem
  },
  created() {
    // console.log(this.posts);
  },
  computed: {
    posts() {
      return this.$page.allPost.edges;
    },
    postsByYear() {
      const posts = this.$page.allPost.edges;
      return posts.filter(post => {
        return post.node.date.includes(this.year);
      });
    }
  }
};
</script>

<style scoped="true">
h1 {
  font-size: 2em;
  margin: 0;
}

.post-list {
  margin-top: 20px;
}
</style>
