<template>
  <footer class="footer">
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
          <li class="nav-item px-1">
            <a class="nav-link text-grey py-3" target="_blank" rel="noopener" href="https://t.me/Mad_Advocado"><telegram/></a>
          </li>
          <li class="nav-item px-1">
            <a class="nav-link text-grey py-3" target="_blank" rel="noopener" href="https://github.com/JbanTeam"><github/></a>
          </li>
          <li class="nav-item px-1">
            <a class="nav-link text-grey py-3" target="_blank" rel="noopener" href="https://vk.com"><vk/></a>
          </li>
        </ul>
      </div>
    </nav>
  </footer>
</template>

<script>
import Telegram from 'vue-material-design-icons/Telegram'
import Github from 'vue-material-design-icons/Github'
import Vk from 'vue-material-design-icons/Vk'
export default {
  components: {
    Telegram,
    Github,
    Vk
  },
  props: ["siteName"],
  data() {
    return {
      
    };
  }
};
</script>

<style>
.footer {
  margin-top: auto;
}
.text-grey {
  color: #6c757d;
}
</style>