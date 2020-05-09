<template>
  <transition name="fade">
    <div class="mobile-menu">
      <ul class="menu-list">
        <li class="menu-item" v-for="link in this.links" :key="link.url">
          <g-link class="menu-item__link text-grey py-3" :exact="link.url === '/blog' ? false : true" active-class="bg-warning text-white" :to="link.url"><span>{{link.name}}</span></g-link>
        </li>
        <li class="my-5">
          <a class="soc-link text-grey px-2" target="_blank" rel="noopener" v-for="soclink in socLinks" :key="soclink.url" :href="soclink.url">
            <font-awesome :icon="soclink.icon" size="2x" fixed-width />
          </a>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["links"],
  data() {
    return {
      socLinks: [
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
.mobile-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #383044;
  z-index: 99;
}

.menu-list {
  display: block;
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
  position: absolute;
  top: 15%;
  width: 100%;
}

@media (max-height: 360px) {
  .menu-list {
    top: 20%;
  }
}

.menu-item__link {
  display: inline-block;
  text-align: center;
  font-size: 25px;
  width: 100%;
  text-decoration: none;
}

.menu-item__link:hover {
  color: rgb(179, 176, 176);
}

.menu-item__link.bg-warning:hover {
  background-color: #fdcc50 !important;
  color: white;
}

.soc-link:hover,
.soc-link:focus,
.soc-link:active {
  color: rgba(255, 255, 255, 0.65);
}

/*transition ********************************************************** */
.fade-enter {
  /* добавляется на долю секунды до анимации */
  opacity: 0;
}

.fade-enter-active {
  /* добавляется когда анимация начинает идти, .fade-enter удаляется*/
  transition: opacity 0.5s;
}

.fade-enter-to {
  /* остается на долю секунды после того, как анимация завершилась */
}

.fade-leave {
  /* добавляется на долю секунды до анимации */
  /* opacity: 0; */
}

.fade-leave-active {
  /* добавляется когда анимация начинает идти, .fade-leave удаляется*/
  transition: opacity 0.5s;
}

.fade-leave-to {
  /* остается на долю секунды после того, как анимация завершилась */
  opacity: 0;
}
</style>