<template>
  <section id="errorPage">
    <div class="container">
      <h3 class="text-center">
        Page Not found
        <br />
        <nuxt-link class="text-center" to="/">Go Back To Saftey</nuxt-link>
      </h3>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
html {
  font-family: 'Space Grotesk', sans-serif;
}
#errorPage {
  background-image: url('~assets/images/error.jpg');
  width: 100%;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
#errorPage h3 {
  margin-top: 100px;
}
</style>