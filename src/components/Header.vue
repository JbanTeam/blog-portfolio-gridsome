<template>
  <header class="header mb-5">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark py-0">
      <div class="container">
        <g-link class="text-white" style="font-size: 20px;" to="/">JbanTeam</g-link>
        <!-- Toggler/collapsibe Button -->
        <div class="py-2">
          <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <ul class="navbar-nav collapse navbar-collapse justify-content-end">
          <li class="nav-item px-1" v-for="link in links" :key="link.url">
            <g-link class="nav-link text-grey py-3" exact active-class="bg-warning text-light" :to="link.url">{{link.name}}</g-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: ["siteName"],
  data() {
    return {
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
  }
};
</script>

<style>
.text-grey {
  color: #6c757d;
}
</style>