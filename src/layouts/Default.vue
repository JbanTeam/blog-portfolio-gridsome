<template>
  <div class="app">
    <!-- header -->
    <Ownhead :siteName="$static.metadata.siteName" />
    <!-- route content -->
    <div class="container py-5">
      <div class="row">
        <div class="col col-12">
          <slot />
        </div>
      </div>
    </div>
    <!-- footer -->
    <Ownfoot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  components: {},
  mounted() {
    document.querySelector("html").classList.remove("scroll-off");
    document.querySelector(".mobile-menu").classList.remove("scroll-on");
  }
};
</script>

<style>
</style>
