<template>
  <Layout>
    <main class="posts">
      <h1 class="title text-center mb-4">My blog is here</h1>
      <div class="form-group sort-wrapper">
        <div class="mr-3">
          <label for="sort">Sort by date</label>
          <select class="form-control form-control-sm" id="sort" v-model="date">
            <option>Newer</option>
            <option>Older</option>
          </select>
        </div>
        <div>
          <label for="sort">Sort by:</label>
          <select class="form-control form-control-sm" id="sort" v-model="tag">
            <option v-for="tag in this.tags" :key="tag">{{tag}}</option>
          </select>
        </div>
      </div>
      <PostList :posts="this.posts" />
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
  created() {},
  data() {
    return {
      tag: "All",
      date: "Newer"
    };
  },
  computed: {
    posts() {
      let posts = [];
      if (this.tag === "All") posts = this.$page.allPost.edges;
      else {
        posts = this.$page.allPost.edges.filter(post => {
          return post.node.tags.includes(this.tag);
        });
      }
      posts.sort((a, b) => {
        if (this.date === "Older")
          return Date.parse(a.node.date) - Date.parse(b.node.date);
        else return Date.parse(b.node.date) - Date.parse(a.node.date);
      });
      return posts;
    },
    tags() {
      let tags = [];
      this.$page.allPost.edges.forEach(post => {
        tags.push(...post.node.tags);
      });
      tags = ["All", ...new Set(tags)];
      return tags;
    }
  }
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
.posts {
  /* margin-bottom: 44px; */
}
</style>
