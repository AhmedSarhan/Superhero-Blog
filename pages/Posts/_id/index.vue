<template>
  <div class="single-post-page">
    <div class="container">
      <div
        class="post-thumbnail"
        :style="{
          backgroundImage: 'url(' + loadedPost.thumbnail + ')',
        }"
      ></div>
      <h1>{{ loadedPost.title }}</h1>
      <h2>Added By: {{ loadedPost.author }}</h2>
      <h3>Date: {{ loadedPost.date }}</h3>
      <p>{{ loadedPost.content }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  asyncData(context) {
    return axios
      .get(
        'https://superhero-blog.firebaseio.com/posts/' +
          context.params.id +
          '.json'
      )
      .then((res) => {
        return {
          loadedPost: res.data,
        }
      })
      .catch((e) => context.error(e))
  },
}
</script>

<style scoped>
.post-thumbnail {
  height: 300px;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>