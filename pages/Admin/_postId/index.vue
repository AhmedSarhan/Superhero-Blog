<template>
  <div class="update-post-page">
    <div class="updated-form">
      <div class="container">
        <AdminPostForm :post="loadedPost" @submit="editPost" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/AdminPostForm'
export default {
  components: {
    AdminPostForm,
  },
  asyncData(context) {
    return axios
      .get(
        'https://superhero-blog.firebaseio.com/posts/' +
          context.params.postId +
          '.json'
      )
      .then((res) => {
        return {
          loadedPost: { ...res.data, id: context.params.postId },
        }
      })
      .catch((e) => context.error(e))
  },
  methods: {
    editPost(editedPost) {
      this.$store.dispatch('editPost', editedPost).then(() => {
        this.$router.push('/admin/')
      })
    },
  },
}
</script>
<style>
</style>