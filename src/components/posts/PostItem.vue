<template>
  <div class="col col-sm-6 col-md-4 col-10 mb-4">
    <g-link class="card-link d-block h-100 text-decoration-none" exact :to="this.post.path">
      <div class="card h-100">
        <g-image immediate :src="this.img" class="blog-image card-img-top" />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{{this.post.title}}</h5>
          <p class="card-text flex-grow-1">{{this.post.description}}</p>
          <span class="card-date">{{this.post.date}}</span>
          <div class="tags">
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
    return {};
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

.card .blog-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-date {
  font-size: 13px;
  margin: 0px 0px 10px 0px;
}
</style>
