<template>
  <div class="palette" :style="menuOpen ? {right: '48px'} : {right: 'initial'}">
    <font-awesome class="palette-current" :class="themes[currentTheme].class" :icon="['fas', 'palette']" size="lg" fixed-width />
    <div class="palette-themes">
      <div class="palette-theme" :class="themes[theme].class" v-for="theme in Object.keys(themes)" :key="themes[theme].class" @click="onThemeChange(theme)">
        <font-awesome :icon="['fas', 'palette']" size="lg" fixed-width />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["menuOpen"],
  created() {
    if (localStorage.getItem("mytheme")) {
      this.currentTheme = localStorage.getItem("mytheme");
    } else {
      this.currentTheme = "light-theme";
    }
  },
  data() {
    return {
      currentTheme: "",
      themes: {
        "light-theme": {
          class: "palette-light"
        },
        "dark-theme": {
          class: "palette-dark"
        },
        "red-theme": {
          class: "palette-red"
        },
        "blue-theme": {
          class: "palette-blue"
        },
        "green-theme": {
          class: "palette-green"
        }
      }
    };
  },
  computed: {},
  methods: {
    onThemeChange(theme) {
      document.querySelector("body").classList.remove(`${this.currentTheme}`);
      this.currentTheme = theme;
      localStorage.setItem("mytheme", `${theme}`);
      document.querySelector("body").classList.add(`${theme}`);
      this.$eventBus.$emit("changeTheme", theme);
    }
  }
};
</script>

<style scoped>
.palette {
  position: relative;
  height: 56px;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 575px) {
  .palette {
    margin: 0px 15px 0px 0px;
  }
}
.palette .palette-current {
  cursor: pointer;
}
.palette:hover .palette-themes {
  display: block;
}

.palette-themes {
  position: absolute;
  display: none;
  padding: 10px;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
}
.palette-theme {
  margin: 0px 0px 10px 0px;
  cursor: pointer;
}
.palette-theme:last-child {
  margin: 0px 0px 0px 0px;
}
</style>