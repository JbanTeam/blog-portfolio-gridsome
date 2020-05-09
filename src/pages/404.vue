<template>
  <Layout>
    <div class="p404">
      <h1 class="p404-title">404</h1>
      <h2 class="p404-sorry">{{this.$lang.notfound[curLang].desc}}</h2>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Page not found"
  },
  mounted() {
    this.$eventBus.$on("changeLang", lang => (this.curLang = lang));
    let lang = localStorage.getItem("mylang");
    if (lang) {
      this.curLang = lang;
    }
  },
  data() {
    return {
      curLang: "en"
    };
  }
};
</script>

<style lang="scss">
.p404 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  &-title {
    font-size: 120px;
    font-weight: bold;
  }
  &-sorry {
    font-size: 45px;
  }
}
</style>