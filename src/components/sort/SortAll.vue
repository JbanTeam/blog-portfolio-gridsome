<template>
  <div>
    <label v-if="curLang === 'en'" for="sort">Sort by:</label>
    <label v-else for="sort">Сортировать по:</label>
    <select class="form-control form-control-sm" id="sort" v-model="curTag" @change="changeTag($event)">
      <option v-for="tag in this.tags" :key="tag">{{tag}}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ["lang", "tags", "sortTag", "selectOpts"],
  mounted() {
    this.curLang = this.lang;
    this.curTag = this.sortTag;
    this.$eventBus.$on("changeLang", this.onLangChange);
  },
  data() {
    return {
      curLang: "",
      curTag: ""
    };
  },
  methods: {
    changeTag(e) {
      this.$emit("tagChange", this.curTag);
    },
    onLangChange(lang) {
      let index = this.selectOpts[this.curLang].indexOf(this.curTag);
      if (index !== -1) this.curTag = this.selectOpts[lang][index];
      this.curLang = lang;
      this.$emit("tagChange", this.curTag);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>