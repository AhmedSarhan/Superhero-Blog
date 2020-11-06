<template>
  <div class="posts-page">
    <div class="container">
      <PostsList :posts="loadedPosts" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PostsList from '@/components/PostsList'
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
  },
  components: {
    PostsList,
  },
  methods: {},
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>