<template>
  <header class="header">
    <nav class="navbar navbar-expand-sm py-0">
      <div class="container">
        <g-link class="logo-link text-decoration-none" style="font-size: 20px;" to="/">JbanTeam</g-link>

        <ul class="navbar-nav collapse navbar-collapse justify-content-end mr-3">
          <li class="nav-item" v-for="link in links[curLang]" :key="link.url">
            <g-link class="nav-link" :exact="link.url === '/blog' ? false : true" active-class="nav-link-active" :to="link.url">{{link.name}}</g-link>
          </li>
        </ul>

        <mobile-menu v-show="menuOpen" :links="links[curLang]" :isActive="menuOpen"></mobile-menu>

        <Palette class="ml-auto" :menuOpen="menuOpen" />

        <div class="lang" :style="menuOpen ? {right: '48px'} : {right: 'initial'}">
          <g-image v-show="curLang === 'en'" src="@/assets/en_icon.png" />
          <g-image v-show="curLang === 'rus'" src="@/assets/rus_icon.png" />
          <ul class="lang-choose">
            <li class="lang-item" @click="onLangChange('en')">
              <g-image src="@/assets/en_icon.png" />
            </li>
            <li class="lang-item" @click="onLangChange('rus')">
              <g-image src="@/assets/rus_icon.png" />
            </li>
          </ul>
        </div>
        <!-- Toggler -->
        <hamburger :menuOpen="menuOpen" @toggleMenu="onToggleMenu($event)"></hamburger>

      </div>
    </nav>
  </header>
</template>

<script>
import MobileMenu from "./MobileMenu";
import Hamburger from "./Hamburger";
import Palette from "./Palette";
export default {
  props: ["siteName", "links"],
  components: {
    MobileMenu,
    Hamburger,
    Palette
  },
  mounted() {
    let lang = localStorage.getItem("mylang");
    if (lang) {
      this.curLang = lang;
    } else {
      localStorage.setItem("mylang", "en");
    }
  },
  data() {
    return {
      curLang: "en",
      menuOpen: false
    };
  },
  methods: {
    onToggleMenu(isOpen) {
      this.menuOpen = isOpen;
      if (isOpen) {
        document.querySelector("html").classList.add("scroll-off");
        document.querySelector(".mobile-menu").classList.add("scroll-on");
      } else {
        document.querySelector("html").classList.remove("scroll-off");
        document.querySelector(".mobile-menu").classList.remove("scroll-on");
      }
    },
    onLangChange(lang) {
      this.curLang = lang;
      localStorage.setItem("mylang", lang);
      this.$eventBus.$emit("changeLang", lang);
    }
  }
};
</script>

<style lang="scss">
.navbar {
  min-height: 56px;
}
.navbar .container {
  min-height: inherit;
}

.navbar-nav {
  min-height: inherit;
}

.nav-item {
  display: block;
  min-height: inherit;
}

.nav-item .nav-link {
  min-height: inherit;
  padding: 0;
  line-height: 56px;
}

.lang {
  cursor: pointer;
  position: relative;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 0px 10px;
  &:hover {
    .lang-choose {
      display: block;
    }
  }
  img {
    display: block;
    width: 25px;
  }
  .lang-choose {
    display: none;
    position: absolute;
    left: 50%;
    top: 100%;
    padding: 0px;
    margin: 0px;
    list-style: none;
    transform: translate(-50%);
    text-align: center;
    z-index: 99;
  }
  &-item {
    cursor: pointer;
    display: block;
    padding: 10px;
  }
}
@media (max-width: 575px) {
  .lang {
    margin: 0px 15px 0px 0px;
  }
}
</style>