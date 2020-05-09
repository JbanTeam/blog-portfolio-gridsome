
<template>
  <div class="col col-sm-6 col-md-4 col-10 mb-4">
    <!-- <div class="col mb-4"> -->
    <a class="card-link d-block h-100 text-decoration-none" target="_blank" rel="noopener" :href="project.link">
      <div class="card h-100">
        <g-image immediate :src="project.image" class="image card-img-top" />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title mb-4 text-center">{{project.name[curLang]}}</h5>
          <p class="card-text project-desc">{{project.desc[curLang]}}</p>
          <div class="tags mt-auto">
            <span class="tag" v-for="tag in project.tags" :key="tag">#{{tag}}</span>
            <span class="tag tag-src">#{{project.src.toLowerCase()}}</span>
          </div>
        </div>
        <span class="card-btn">
          <font-awesome :icon="['fas', 'arrow-alt-circle-right']" size="lg" fixed-width />
        </span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["project", "curLang"],
  data() {
    return {};
  },
  computed: {}
};
</script>

<style>
.card {
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  overflow: hidden;
}

.card .image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
</style>
