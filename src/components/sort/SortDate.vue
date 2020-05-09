<template>
  <div class="mr-3">
    <label v-if="curLang === 'en'" for="sort">Sort by date</label>
    <label v-else for="sort">Сортировка по дате</label>
    <select class="form-control form-control-sm" id="sort" v-model="date" @change="changeDate($event)">
      <option v-for="opt in selectOpts[curLang]" :key="opt">{{opt}}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ["lang"],
  mounted() {
    this.curLang = this.lang;
    this.$eventBus.$on("changeLang", this.onLangChange);
    this.date = this.selectOpts[this.curLang][0];
  },
  data() {
    return {
      date: "",
      curLang: "",
      selectOpts: {
        en: ["Newer", "Older"],
        rus: ["Сначала новые", "Сначала старые"]
      }
    };
  },
  methods: {
    changeDate(e) {
      this.$emit("dateChange", this.date);
    },
    onLangChange(lang) {
      let index = this.selectOpts[this.curLang].indexOf(this.date);
      this.date = this.selectOpts[lang][index];
      this.curLang = lang;
      this.$emit("dateChange", this.date);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>