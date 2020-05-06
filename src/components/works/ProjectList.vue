<template>
  <div class="container">
    <!-- <div class="row no-gutters flex-column"> -->
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 justify-content-center">
      <ProjectItem v-for="project in projects" :key="project.link" :project="project" />
    </div>
  </div>
</template>

<script>
import ProjectItem from "./ProjectItem";

export default {
  props: ["projects"],
  components: {
    ProjectItem
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
