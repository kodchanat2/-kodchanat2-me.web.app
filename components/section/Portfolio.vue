<template>
  <div id="portfolio" class="max-w-4xl mx-auto py-24 text-center">
    <h2 class="font-semibold text-4xl uppercase mb-4"> Portfolio </h2>
    <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-0">
      <div 
        class="group"
        data-aos="zoom-in"
        :data-aos-delay="i*100"
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
              group-hover:bg-gray-700
              group-hover:bg-opacity-70
              group-hover:backdrop-blur-sm
            " 
          />
          <figure>
            <img :src="require(`@/assets/images/portfolio/${port.img}.jpg`)">
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
            <h3 class="card-title mb-1 detail-card">{{port.title}}</h3> 
            <p class="detail-card text-sm">{{port.description}}</p> 
            <div v-if="port.link" class="card-actions justify-center last:mt-2">
              <a :href="port.link" target="_blank">
                <button class="btn btn-sm text-sm mx-auto detail-card">
                  visit site
                  <fa-icon icon="external-link-alt" class="ml-3 fa-sm"/>
                </button>
              </a>
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
      title: 'PPS Program',
      description: "Code editor/compiler for Computer Engineering's students to submit their codes",
      img: 'pps',
    },
    {
      title: 'Entertainment application in NSC 18',
      description: "'Partylink' is multiplayer minigames you can play with your friends or family by your phone",
      img: 'partylink',
      link: 'http://fic.nectec.or.th/nsc18_Decisions',
    },
    {
      title: '3D game with extension board',
      description: "A Hackathon project that sync between 3D game and real-world IOT devices",
      img: 'kidbright',
      link: 'https://photos.app.goo.gl/atuwdLpfkQxDMFhZ6',
    },
    {
      title: 'Global Game Jam 2019',
      description: "'Planet DASH' is 3D game about spaceman travels across planets",
      img: 'planetdash',
      link: 'https://v3.globalgamejam.org/2019/games/planet-dash',
    },
    {
      title: 'LENSOD.com',
      description: "website for booking artists, I developed this dashboard page",
      img: 'lensod',
      link: 'https://www.lensod.com/',
    },
    {
      title: 'MC browsing via LENSOD',
      description: "page for find MC in Thailand, I developed this whole page",
      img: 'lensod-mc',
      link: 'https://www.lensod.com/browse/mc',
    },
  ]
}
</script>

<style lang="sass" scoped>
  .detail-card
    @apply opacity-0 transition-opacity duration-500 group-hover:opacity-100
</style>