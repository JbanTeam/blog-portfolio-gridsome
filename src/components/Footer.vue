<template>
  <footer class="footer">
    <nav class="navbar py-0">
      <div class="container justify-content-between">
        <g-link class="logo-link text-decoration-none flex-grow-1" style="font-size: 20px;" to="/">JbanTeam</g-link>

        <div class="madeby flex-grow-1">
          <span>{{this.$lang.madeby[curLang]}}</span>
        </div>

        <ul class="soc-list flex-grow-1 justify-content-end">
          <li class="soc-item ml-3" v-for="link in links" :key="link.url">
            <a class="soc-link px-0" target="_blank" rel="noopener" :href="link.url">
              <font-awesome :icon="link.icon" size="lg" fixed-width />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  props: ["siteName"],
  mounted() {
    this.$eventBus.$on("changeLang", lang => (this.curLang = lang));
    let lang = localStorage.getItem("mylang");
    if (lang) {
      this.curLang = lang;
    }
  },
  data() {
    return {
      curLang: "en",
      links: [
        {
          url: "https://t.me/Mad_Advocado",
          icon: ["fab", "telegram-plane"]
        },
        {
          url: "https://github.com/JbanTeam",
          icon: ["fab", "github"]
        },
        {
          url: "https://vk.com",
          icon: ["fab", "vk"]
        }
      ]
    };
  }
};
</script>

<style scoped>
.footer {
  margin-top: auto;
}
.soc-list {
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.soc-link {
  display: block;
  text-align: right;
}

.madeby {
  text-align: center;
}

@media (max-width: 576px) {
  .madeby {
    font-size: 12px;
    text-align: right;
  }
  .soc-list {
    display: none;
  }
}
</style>