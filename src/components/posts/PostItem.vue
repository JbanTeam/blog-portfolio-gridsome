<template>
  <div class="col mb-4">
    <g-link class="d-block h-100 text-decoration-none text-dark" exact :to="this.post.path">
      <div class="card h-100">
        <g-image immediate :src="this.img" class="blog-image card-img-top" />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{{this.post.title}}</h5>
          <p class="card-text">{{this.post.description}}</p>
          <div class="tags mt-auto">
            <span class="tag" v-for="tag in this.post.tags" :key="tag">#{{tag}}</span>
          </div>
        </div>
        <span class="card-btn">
          <font-awesome :icon="['fas', 'arrow-alt-circle-right']" size="lg" fixed-width />
        </span>
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["post"],
  data() {
    return {
      // img: ''
    };
  },
  computed: {
    date() {
      return this.post.date.substring(0, this.post.date.length - 4);
    },
    img() {
      return this.post.image;
    }
  }
};
</script>

<style>
.card {
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
.card:hover {
  border-color: rgba(0, 0, 0, 0.5);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.card .blog-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
