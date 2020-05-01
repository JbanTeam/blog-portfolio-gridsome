<template>
  <Layout>
    <main class="posts">
      <h1 class="title text-center mb-4">My blog is here</h1>
      <div class="form-group sort-wrapper">
        <div>
          <label for="sort">Sort by:</label>
          <select class="form-control form-control-sm" id="sort" v-model="tag">
            <option v-for="tag in this.tags" :key="tag">{{tag}}</option>
          </select>
        </div>
      </div>
      <PostList :posts="this.posts" />
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
  created() {
    console.log(this.$page.allPost.edges);
    console.log(this.tags);
  },
  data() {
    return {
      tag: "All"
    };
  },
  computed: {
    posts() {
      let posts = this.$page.allPost.edges;
      if (this.tag === "All") return posts;
      else {
        posts = posts.filter(post => {
          return post.node.tags.includes(this.tag);
        });
        return posts;
      }
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
