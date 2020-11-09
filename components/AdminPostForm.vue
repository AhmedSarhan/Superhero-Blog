<template>
  <form id="adminForm" @submit.prevent="submit">
    <div class="form-group">
      <label for="Authname">Author Name</label>
      <input
        class="form-control"
        type="text"
        id="Authname"
        name="Authname"
        v-model="editedPost.author"
        required
      />
    </div>
    <div class="form-group">
      <label for="title">Title</label>
      <input
        class="form-control"
        type="text"
        id="title"
        name="title"
        v-model="editedPost.title"
        required
      />
    </div>
    <div class="form-group">
      <label for="thumbnail">Thumbnail</label>
      <input
        class="form-control"
        type="url"
        id="thumbnail"
        name="thumbnail"
        v-model="editedPost.thumbnail"
        required
      />
    </div>
    <div class="form-group">
      <label for="content">Content</label>
      <textarea
        class="form-control"
        name="content"
        id="content"
        rows="7"
        v-model="editedPost.content"
        required
      ></textarea>
    </div>
    <div class="form-group">
      <label for="content">Post Preview</label>
      <textarea
        class="form-control"
        name="content"
        id="content"
        rows="3"
        v-model="editedPost.preview"
        required
      ></textarea>
    </div>
    <div class="form-group">
      <input class="btn btn-primary" type="submit" value="save" />
      <button class="btn btn-danger" @click.prevent="onCancel">Cancel</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false,
    },
  },

  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: '',
            title: '',
            thumbnail: '',
            content: '',
            preview: '',
          },
    }
  },
  methods: {
    submit() {
      // save the post
      this.$emit('submit', this.editedPost)
    },
    onCancel() {
      // Navigate back to Admin
      this.$router.push('/admin/')
    },
  },
}
</script>

<style scoped>
#adminForm {
  margin: 20px auto;
  width: 70%;
}
@media only screen and (max-width: 1023px) {
  #adminForm {
    width: 100%;
  }
}
</style>