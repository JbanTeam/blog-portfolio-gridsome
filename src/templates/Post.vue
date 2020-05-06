<template>
  <Layout>
    <div class="article">
      <h1 class="article-title mb-3 text-center">{{$page.post.title}}</h1>
      <p class="article-desc text-center">{{$page.post.description}}</p>
      <p class="article-date mb-5"> {{ $page.post.date}} · <i>{{$page.post.timeToRead}} min read</i></p>
      <article v-html="$page.post.content" />
    </div>
  </Layout>
</template>

<script>
export default {};
</script>


<page-query>
query Post ($path: String!) {
  metadata {
    siteName
    siteDescription
  }
  post: post (path: $path) {
    id
    title
    description
    content
    tags
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>

<style>
.article {
  /* margin-top: 15px; */
}

.article-title {
  margin-bottom: 0;
}

.article-desc {
  font-size: 21px;
}

.article .article-date {
  color: var(--app-font-color);
  margin-top: 0;
  font-size: 0.8em;
}

.article h2 {
  margin: 0px 0px 30px 0px;
}
.article h3 {
  margin: 0px 0px 22px 0px;
}
.article h4 {
  margin: 0px 0px 18px 0px;
}
.article h5,
.article h5 {
  margin: 0px 0px 15px 0px;
}
.article p {
  font-size: 18px;
}

.article ol,
.article ul {
  margin: 25px 0px;
}

.article li {
  margin: 0px 0px 12px 0px;
}

.article blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  font-size: 17.5px;
  border-left: 5px solid #eee;
}

.article table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
}

.article th {
  vertical-align: bottom;
  border-bottom: 2px solid #ddd;
}

.article td {
  border-top: 1px solid #ddd;
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
}

.article tr:nth-child(odd) td {
  background-color: #f9f9f9;
}

.article img {
  max-width: 100%;
  object-fit: cover;
  display: block;
  margin: 30px auto;
}
.article img:first-of-type {
  max-height: 500px;
}
</style>
