<template>
  <div class="container">
    <!-- <div class="row no-gutters flex-column"> -->
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 justify-content-center">
      <PostItem v-for="post in this.posts" :key="post.node.id" :post="post.node" :months="months" :curLang="curLang" />
    </div>
  </div>
</template>

<script>
import PostItem from "./PostItem";

export default {
  props: ["posts", "curLang"],
  components: {
    PostItem
  },
  created() {
    // console.log(this.posts);
  },
  data() {
    return {
      months: {
        en: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        rus: [
          "Янв",
          "Фев",
          "Мар",
          "Апр",
          "Май",
          "Июн",
          "Июл",
          "Авг",
          "Сен",
          "Окт",
          "Ноя",
          "Дек"
        ]
      }
    };
  }
};
</script>

<style scoped="true">
h1 {
  font-size: 2em;
  margin: 0;
}

.post-list {
  margin-top: 20px;
}
</style>
