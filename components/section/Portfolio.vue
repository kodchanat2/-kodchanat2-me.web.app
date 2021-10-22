<template>
  <div class="max-w-4xl mx-auto py-24 text-center">
    <h2 class="font-semibold text-4xl uppercase mb-4"> Portfolio </h2>
    <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-0">
      <div 
      class="group"
        v-for="(port, i) in ports"
        :key="i"
      >
        <div class="card shadow-xl image-full h-56 before:hidden">
          <div 
            class="
              bg-transparent
              bg-opacity-0
              backdrop-blur-none
              transition-all
              duration-500
              group-hover:bg-gray-500
              group-hover:bg-opacity-20
              group-hover:backdrop-blur-sm
            " 
          />
          <figure>
            <img :src="port.img">
          </figure> 
          <div 
            class="
              h-56
              justify-center
              card-body
              pointer-events-none
              group-hover:pointer-events-auto
            "
          >
            <h3 class="card-title detail-card">{{port.title}}</h3> 
            <p class="detail-card">{{port.description}}</p> 
            <div v-if="port.link" class="card-actions last:mt-2">
              <button class="btn btn-sm text-sm mx-auto detail-card">
                visit site
                <fa-icon icon="external-link-alt" class="ml-3 fa-sm"/>
              </button>
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
  ports = [
    {
      title: 'lorem loremloremlorem',
      description: 'lorem loremloremlorem ipsum ipsum ipsum ipsum ipsum ipsum',
      img: 'https://via.placeholder.com/600x400',
      link: '#',
    },
    {
      title: 'lorem loremloremlorem',
      description: 'lorem loremloremlorem ipsum ipsum ipsum ipsum ipsum ipsum',
      img: 'https://via.placeholder.com/600x400',
    },
  ]
}
</script>

<style lang="sass" scoped>
  .detail-card
    @apply opacity-0 transition-opacity duration-500 group-hover:opacity-100
</style>