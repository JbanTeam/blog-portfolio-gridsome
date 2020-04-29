<template>
  <div class="hamburger-wrap d-block d-sm-none" :style="menuOpen ? {position: 'fixed', right: '16px'} : {position: 'relative', right: '0'}">
    <button class="hamburger hamburger--squeeze p-2" :class="menuOpen ? 'is-active' : ''" type="button" @click="this.toggle">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  props: ["menuOpen"],
  data() {
    return {};
  },
  methods: {
    toggle() {
      this.$emit("toggleMenu", !this.menuOpen);
    }
  }
};
</script>

<style scoped>
.hamburger-wrap {
  position: relative;
  right: 0;
  z-index: 100;
}

.hamburger-wrap button:focus {
  outline: none;
}

.hamburger-wrap .hamburger {
  font-size: 0;
  border: 1px solid #fff;
  border-radius: 4px;
  opacity: 0.7;
}

.hamburger-wrap .hamburger-box {
  width: 30px;
  height: 22px;
}

.hamburger .hamburger-inner {
  margin-top: -1px;
}

.hamburger .hamburger-inner,
.hamburger .hamburger-inner:after,
.hamburger .hamburger-inner:before,
.hamburger-wrap .hamburger.is-active .hamburger-inner,
.hamburger-wrap .hamburger.is-active .hamburger-inner:after,
.hamburger-wrap .hamburger.is-active .hamburger-inner:before {
  background-color: #fff;
  width: 30px;
  height: 2px;
}
</style>