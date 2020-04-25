<template>
  <div class="app">
    <Ownhead :siteName="$static.metadata.siteName" />
    <div class="container">
      <div class="row">
        <div class="col col-12">
          <slot />
        </div>
      </div>
    </div>
    <Ownfoot/>
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
  components: {
  }
}
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
