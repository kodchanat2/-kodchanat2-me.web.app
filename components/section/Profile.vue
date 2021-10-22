<template>
  <div id="profile" class="bg-gray-500 bg-opacity-20 min-h-screen py-24 text-center">
    <h2 class="font-semibold text-4xl uppercase"> Profile </h2>
    <p class="max-w-xl mx-auto px-4 my-4 text-sm text-justify" v-html="about"></p>
    <div class="flex justify-center">
      <div class="relative wrap overflow-hidden p-10 pb-0 h-full">
        <div class="border-2-2 absolute border-dashed border-dark mt-10 dark:border-platinum h-full border left-14"></div>
        <div 
          class="mb-8 flex justify-between items-center w-full"
          v-for="(event, i) in timeline"
          :key="i"
        >
          <div class="order-2"></div>
          <div class="z-20">
            <div class="my-4 rounded-full h-8 w-8 flex justify-center items-center bg-dark dark:bg-platinum ring-4 ring-dark dark:ring-platinum ring-opacity-50 dark:ring-opacity-50">
             <fa-icon 
                :icon="(event.type === 'award')? 'trophy': 'star'" 
                class="text-orange"
              />
            </div>
          </div>
          <div class="order-1 w-full px-6 py-4 flex flex-col">
              <div class="mb-3 font-bold text-xl whitespace-nowrap">{{event.title}}</div>
              <p class="text-base">{{event.description}}</p>
          </div>
        </div>
        <div class="flex items-center">
          <div class="z-20">
            <div class="mt-4 rounded-full ml-2 h-4 w-4 flex justify-center items-center bg-platinum">
              <fa-icon icon="circle" class="text-orange animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
@Component
export default class extends Vue {
  about: string = "lorem lorem lorem";
  timeline = [
    {
      date: 'oct, 2021',
      title: 'lorem loremloremlorem',
      description: 'ipsum',
      type: 'award',
    },
    {
      date: 'oct, 2021',
      title: 'lorem',
      description: 'ipsum',
    },
  ]
}
</script>

<style lang="sass" scoped>
  .timeline-item::after
    content: ""
    left: -7px
    @apply block absolute top-0 w-3 h-3 bg-white border border-red-400 rounded-full
  
</style>