
<template>
  <div class="col mb-4">
    <a class="d-block h-100 text-decoration-none text-dark" target="_blank" rel="noopener" :href="project.link">
      <div class="card h-100">
        <g-image immediate :src="project.image" class="image card-img-top" />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title mb-4 text-center">{{project.name}}</h5>
          <p class="card-text project-desc">{{project.desc}}</p>
          <div class="tags mt-auto">
            <span class="tag" v-for="tag in project.tags" :key="tag">#{{tag}}</span>
            <span class="tag text-primary">#{{project.src.toLowerCase()}}</span>
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
  props: ["project"],
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
.card:hover {
  border-color: rgba(0, 0, 0, 0.5);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.4);
}

.card .image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

/* .project-desc {
  font-size: 14px;
} */
</style>
