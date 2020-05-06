<template>
  <header class="header">
    <nav class="navbar navbar-expand-sm py-0">
      <div class="container">
        <g-link class="logo-link text-decoration-none" style="font-size: 20px;" to="/">JbanTeam</g-link>

        <ul class="navbar-nav collapse navbar-collapse justify-content-end mr-3">
          <li class="nav-item" v-for="link in links" :key="link.url">
            <g-link class="nav-link" :exact="link.name === 'Blog' ? false : true" active-class="nav-link-active" :to="link.url">{{link.name}}</g-link>
          </li>
        </ul>
        <mobile-menu v-show="menuOpen" :links="links" :isActive="menuOpen"></mobile-menu>
        <Palette class="ml-auto" :menuOpen="menuOpen" />
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
  props: ["siteName"],
  components: {
    MobileMenu,
    Hamburger,
    Palette
  },
  data() {
    return {
      menuOpen: false,
      links: [
        {
          name: "Home",
          url: "/"
        },
        {
          name: "About",
          url: "/about"
        },
        {
          name: "Blog",
          url: "/blog"
        },
        {
          name: "Contacts",
          url: "/contacts"
        }
      ]
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
    }
  }
};
</script>

<style>
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
</style>