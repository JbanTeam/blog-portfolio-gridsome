<template>
  <footer class="footer">
    <nav class="navbar bg-dark navbar-dark py-0">
      <div class="container justify-content-between">
        <g-link class="text-white text-decoration-none flex-grow-1" style="font-size: 20px;" to="/">JbanTeam</g-link>

        <div class="madeby text-secondary flex-grow-1">
          <span>Made by JT, © 2020</span>
        </div>

        <ul class="soc-list flex-grow-1 justify-content-end">
          <li class="soc-item ml-3" v-for="link in links" :key="link.url">
            <a class="soc-link text-grey px-0" target="_blank" rel="noopener" :href="link.url">
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
  data() {
    return {
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
.text-grey {
  color: #6c757d;
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
.soc-link:hover {
  color: rgba(255, 255, 255, 0.65);
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