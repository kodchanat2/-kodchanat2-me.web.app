<template>
  <div class="container mx-auto my-12 grid grid-cols-1 md:grid-cols-5">
    <div class="md:col-span-2 md:order-2 flex justify-center">
      <div class="avatar">
        <div class="mb-8 w-64 h-64 mask mask-hexagon">
          <img src="https://via.placeholder.com/600x400">
        </div>
      </div> 
    </div>

    <div class="md:col-span-3 flex justify-center items-center">
      <h1 class="font-semibold text-center">
        <span class="text-4xl">Hi, I am</span>
        <br/>
        <span style="font-size:10rem;">John</span>
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
@Component
export default class extends Vue {
}
</script>
