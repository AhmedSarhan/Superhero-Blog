<template>
  <div class="admin-new-post-page">
    <div class="new-post-form">
      <div class="container">
        <AdminPostForm @submit="createPost" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import AdminPostForm from '@/components/AdminPostForm'
export default {
  components: {
    AdminPostForm,
  },
  methods: {
    createPost(postData) {
      this.$store.dispatch('addPost', postData).then(() => {
        this.$router.push('/admin/')
      })
    },
  },
}
</script>

<style>
</style>