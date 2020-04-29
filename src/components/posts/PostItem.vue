<template>
  <div class="col mb-4">
    <g-link class="d-block h-100 text-decoration-none text-dark" exact :to="this.post.path">
      <div class="card h-100">
        <g-image immediate :src="this.img" class="card-img-top" />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title mt-auto">{{this.post.title}}</h5>
          <p class="card-text">{{this.post.description}}</p>
        </div>
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
</style>
