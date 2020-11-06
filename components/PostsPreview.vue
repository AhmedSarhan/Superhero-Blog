<template>
  <div class="col-md-4">
    <article class="posts-preview">
      <div
        class="post-thumbnail"
        :style="{
          backgroundImage: 'url(' + thumbnail + ' )',
          marginBottom: '20px',
        }"
      ></div>
      <div class="post-content text-center">
        <nuxt-link :to="postLink">
          <h1 class="post-title">{{ title }}</h1>
        </nuxt-link>
        <p class="post-preview">{{ preview }}</p>
        <small class="post-date">{{ date }} </small>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: false,
    },
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