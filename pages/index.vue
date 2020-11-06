<template>
  <div class="container-fluid">
    <section class="intro">
      <h3>SuperHero Cards</h3>
    </section>
    <section class="featured-posts">
      <div class="container">
        <PostsList :posts="loadedPosts" />
      </div>
    </section>
  </div>
</template>

<script>
import PostsList from '@/components/PostsList'
export default {
  data() {
    return {
      // featuredPosts: loadedPosts.slice(2)
    }
  },
  components: {
    PostsList,
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts.slice(0, 3)
    },
  },
}
</script>

<style scoped>
.intro {
  margin-top: 40px;
  margin-bottom: 50px;
  background-image: url('https://wallpaperaccess.com/full/19681.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 200px;
  height: 400px;
  width: 100% !important;
}
/* .intro {
  margin-top: 40px;
  margin-bottom: 50px;
  background-image: url("~assets/images/marvel.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 200px;
  height: 400px;
  width: 100%;
} */
.intro h3 {
  background: #f4f4f4;
  -webkit-box-shadow: -1px 10px 5px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 10px 5px -6px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 10px 5px -6px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  font-size: 35px;
  font-weight: 700;
  width: 80%;
  margin-left: 3%;
  padding: 10px 20px;
}
@media only screen and (min-width: 1023) {
  .intro h3 {
    width: 50%;
  }
}
</style>
