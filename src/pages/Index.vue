<template>
  <Layout>
    <div class="img-wrap">
      <g-image class="img" alt="geek" src="~/assets/code.jpg" />
    </div>
    <main class="pt-5">
      <h1 class="title text-center mb-3">Welcome to my portfolio/blog website</h1>
      <p class="desc text-center">Here You can find posts about web-programming and to see my works.</p>
      <project-list :projects="this.$page.allProjectsArr.edges[0].node.projects"></project-list>
    </main>
  </Layout>
</template>

<script>
import ProjectList from "~/components/works/ProjectList";
export default {
  metaInfo: {
    title: "Home"
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
.img-wrap {
  max-width: 100px;
  margin: auto;
}
.img-wrap img {
  max-width: 100%;
}
</style>
