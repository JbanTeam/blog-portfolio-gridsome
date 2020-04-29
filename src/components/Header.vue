<template>
  <header class="header">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark py-0">
      <div class="container">
        <g-link class="text-white text-decoration-none" style="font-size: 20px;" to="/">JbanTeam</g-link>
        <!-- Toggler -->
        <hamburger :menuOpen="menuOpen" @toggleMenu="onToggleMenu($event)"></hamburger>

        <mobile-menu v-show="menuOpen" :links="links" :isActive="menuOpen"></mobile-menu>

        <ul class="navbar-nav collapse navbar-collapse justify-content-end">
          <li class="nav-item px-1" v-for="link in links" :key="link.url">
            <g-link class="nav-link text-grey" :exact="link.name === 'Blog' ? false : true" active-class="bg-warning text-white" :to="link.url">{{link.name}}</g-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import MobileMenu from "./MobileMenu";
import Hamburger from "./Hamburger";
export default {
  props: ["siteName"],
  components: {
    MobileMenu,
    Hamburger
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
.text-grey {
  color: #6c757d;
}

a.nav-link.bg-warning:hover {
  background-color: #fdcc50 !important;
}

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