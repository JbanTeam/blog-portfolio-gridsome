<template>
  <Layout>
    <main>
      <h1 class="title text-center mb-3">About me</h1>
      <p class="desc text-center">My name is JT, I'm a full-stack web-developer. You can find technologies, which I use in my work, below. If You want to cooperate with me, please write on my
        <a class="text-decoration-none" target="_blank" rel="noopener" href="https://t.me/Mad_Advocado">
          telegram
        </a> or
        <a class="text-decoration-none" target="_blank" rel="noopener" href="https://vk.com">vKontakte</a>.
      </p>
      <div class="techs withline">
        <span class="tech-icon" v-for="tech in techs" :key="tech.id">
          <font-awesome :style="tech.color" :icon="tech.name" size="4x" v-tooltip="{
            content: tech.tooltip,
            offset: 3
          }" />
        </span>
      </div>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About"
  },
  data() {
    return {
      techs: [
        {
          id: 1,
          name: ["fab", "js-square"],
          tooltip: "JavaScript",
          color: {
            color: "#f8df1f"
          }
        },
        {
          id: 2,
          name: ["fab", "vuejs"],
          tooltip: "VueJs",
          color: {
            color: "#41b786"
          }
        },
        {
          id: 3,
          name: ["fab", "react"],
          tooltip: "ReactJs",
          color: {
            color: "#00cbf3"
          }
        },
        {
          id: 4,
          name: ["fab", "html5"],
          tooltip: "HTML5",
          color: {
            color: "#e54c25"
          }
        },
        {
          id: 5,
          name: ["fab", "css3"],
          tooltip: "CSS",
          color: {
            color: "#0476bd"
          }
        },
        {
          id: 6,
          name: ["fab", "node-js"],
          tooltip: "NodeJs",
          color: {
            color: "#8cc84c"
          }
        },
        {
          id: 7,
          name: ["fab", "wordpress"],
          tooltip: "Wordpress CMS",
          color: {
            color: "#027499"
          }
        },
        {
          id: 8,
          name: ["fab", "modx"],
          tooltip: "Modx CMS",
          color: {
            color: "#55b14b"
          }
        },
        {
          id: 9,
          name: ["fab", "opencart"],
          tooltip: "OpenCart CMS",
          color: {
            color: "#29b5f6"
          }
        }
      ]
    };
  }
};
</script>

<style>
.withline {
  position: relative;
}
.withline::after,
.withline::before {
  content: "";
  display: block;
  min-width: 300px;
  height: 1px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.withline::before {
  bottom: initial;
  top: 0;
}

@media (max-width: 576px) {
  .withline::after,
  .withline::before {
    min-width: 170px;
  }
}

.techs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px 0;
}

.tech-icon {
  flex: 0 1 26%;
  text-align: center;
  margin-bottom: 40px;
}
.tech-icon svg {
  transition: transform 0.3s ease-in-out;
  -webkit-filter: drop-shadow(0px 3px 2px rgba(34, 60, 80, 0.35));
  filter: drop-shadow(0px 3px 2px rgba(34, 60, 80, 0.35));
}
.tech-icon svg:hover {
  transform: translateY(-3px);
}
.tech-icon svg:focus {
  outline: none;
}

.tech-icon:nth-child(7),
.tech-icon:nth-child(8),
.tech-icon:nth-child(9) {
  margin-bottom: 0;
}

/* tooltip**************************************************************************************** */
/* tooltip**************************************************************************************** */
.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  border-radius: 6px;
  padding: 5px 12px 4px;
  min-width: 80px;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  z-index: 1;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 5px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, 0.1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.25s, visibility 0.15s;
}

.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.25s;
}
</style>
