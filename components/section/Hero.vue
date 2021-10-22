<template>
  <div class="md:max-w-2xl lg:max-w-4xl mx-auto -mt-16 min-h-screen flex items-center justify-center">
    <div class="grid grid-cols-1 md:grid-cols-5">
      <div class="mb-28 md:mb-0 md:col-span-2 flex justify-center items-center">
        <div class="avatar">
          <div class="w-56 h-56 md:w-60 md:h-60 lg:w-80 lg:h-80 mask mask-circle">
            <img src="~/assets/images/profile.jpg">
          </div>
        </div> 
      </div>

      <div class="md:col-span-3 flex justify-center items-center">
        <h1 class="-ml-5 font-semibold pointer-events-none">
          <fa-layers class="pb-24 text-sm md:text-base lg:text-xl flex">
            <fa-layers-text transform="grow-16 up-70 left-60" class="font-medium whitespace-nowrap" value="Hi, I am" />
            <fa-layers-text transform="grow-90" class="uppercase" value="John" />
            <fa-layers-text transform=" grow-100 right-150 up-10" class="font-thin animate-pulse" value="|"  style="animation-duration: 0.8s;"/>
          </fa-layers>
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
@Component
export default class extends Vue {
}
</script>
