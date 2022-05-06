<template>
  <div class="wrapper-small md:px-10">
    <div class="header mt-1">
      <Hero />
    </div>

    <div class="mt-16">
        <div class="flex justify-center items-center text-base font-semibold text-gray-600">
          <h4 class="text-center">My JOB.</h4>
          <i class='bx bx-chevrons-down ml-1 mt-1'></i>
        </div>

        <div>
          <Portfolio />
        </div>
    </div>

    <div class="mt-16 md:mt-24">
        <div class="flex justify-center items-center text-base font-semibold text-gray-600">
          <h4 class="text-center">Tech stack I use.</h4>
          <i class='bx bx-chevrons-down ml-1 mt-1'></i>
        </div>

        <div>
          <TechStack />
        </div>
    </div>

  </div>
</template>

<script>

  import TechStack from '../components/hero/TechStack.vue'
  import Hero from '../components/hero/Hero.vue'
  export default {
    components: {
      Hero, TechStack,
    }
  }
</script>

<style>

</style>
