<template>
  <div class="posts-list">
    <div class="container">
      <div class="row">
        <PostsPreview
          v-for="post in posts"
          :key="post.id"
          :is-admin="isAdmin"
          :id="post.id"
          :thumbnail="post.thumbnail"
          :title="post.title"
          :content="post.content"
          :preview="post.preview"
          :date="post.date"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PostsPreview from '@/components/PostsPreview'
export default {
  components: {
    PostsPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
    },
  },
}
</script>

<style scoped>
.posts-preview {
  margin: 20px auto;
  box-shadow: 0 2px 2px #ccc;
  border-radius: 5px;
  border: 1px solid #eee;
  padding-bottom: 20px;
}
.post-thumbnail {
  height: 300px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.post-title {
  color: #3f51b5 !important;
  font-size: 25px;
}
.post-title:hover,
.post-title.active {
  color: #9fa8da !important;
  text-decoration: none;
}
.post-preview {
  padding-top: 5px;
  margin-bottom: 5px;
  font-size: 20px;
}
.post-date {
  font-size: 16px;
  text-align: right;
}
</style>