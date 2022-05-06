<template>
  <div class="flex flex-col h-screen justify-between">
    <div class="mb-auto">
      <Header />
    </div>
    <div class="mb-auto">
      <Nuxt />
    </div>
    <div class="h-10">
      <Footer />
    </div>
  </div>
</template>

<script>

import Header from '../components/common/Header.vue'
import Footer from '../components/common/Footer.vue'

  export default {
    components: {
      Header, Footer,
    }
  }
</script>

<style>
  .wrapper{
    @apply max-w-screen-xl mx-auto;
  }
  .wrapper-small{
    @apply max-w-screen-lg mx-auto;
  }
  .flex-center{
    @apply flex justify-center items-center;
  }
</style>