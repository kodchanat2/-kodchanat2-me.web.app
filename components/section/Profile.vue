<template>
  <div id="profile" class="bg-gray-500 bg-opacity-20 min-h-screen py-24 text-center">
    <h2 class="font-semibold text-4xl uppercase"> Profile </h2>
    <p class="max-w-xl mx-auto px-4 my-4 text-sm text-justify" v-html="about"></p>
    <div class="flex justify-center">
      <div class="relative wrap overflow-hidden p-10 pr-0 pb-0 h-full">
        <div class="border-2-2 absolute border-dashed border-dark mt-10 dark:border-platinum h-full border left-14"></div>
        <div 
          class="mb-8 flex justify-between w-full"
          v-for="(event, i) in timeline"
          :key="i"
        >
          <div class="order-2"></div>
          <div class="z-20">
            <div class="my-4 rounded-full h-8 w-8 flex justify-center items-center bg-dark dark:bg-platinum ring-4 ring-dark dark:ring-platinum ring-opacity-50 dark:ring-opacity-50">
             <fa-icon 
                :icon="(event.type === 'award')? 'trophy': (event.type === 'born')? 'birthday-cake': 'star'" 
                class="text-orange"
              />
            </div>
          </div>
          <div class="order-1 w-full px-6 py-2 flex flex-col text-left">
              <p class="text-sm font-light -mb-1">{{event.date}}</p>
              <div class="mb-1 font-bold text-xl">{{event.title}}</div>
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
  about: string = "My name is Kodchanat Viskul. I am a <b>frontend developer</b> with <b>2+ years</b> of work experience and 5+ years of practice with small projects, also able to design web UI and write API servers. I enjoy working with new people and learning new things. If you have some fun projects, do not hesitate to contact me.";
  timeline = [
    {
      date: '8 July, 1996',
      title: 'Born',
      type: 'born',
    },
    {
      date: '2013',
      title: 'Awarded bronze medal in TOI 9',
      description: 'Awarded the bronze medal for Thailand Olympiad in Informatics 9 (TOI 9)',
      type: 'award',
    },
    {
      date: '2015',
      title: '2nd prize winner of ACM-ICPC',
      description: '2nd prize winner of ACM-ICPC Thailand southern contests',
      type: 'award',
    },
    {
      date: '2016',
      title: '2nd prize winner of NSC 18',
      description: '2nd prize winner of entertainment application in NSC 18',
      type: 'award',
    },
    {
      date: '2016',
      title: '3rd prize winner of ACM-ICPC',
      description: '3rd prize winner of ACM-ICPC Thailand southern contests',
      type: 'award',
    },
    {
      date: '2016',
      title: '3rd prize winner of Startup Hack',
      description: '3rd prize winner of Startup Hack in Phuket',
      type: 'award',
    },
    {
      date: 'May - July, 2017',
      title: 'Internship in Fungjai',
      description: 'Internship in Fungjai as Frontend Developer',
    },
    {
      date: '2018',
      title: "Graduated with a Bachelor's degree",
      description: 'Graduated from Computer Engineering, Prince of Songkla University',
      type: 'award',
    },
    {
      date: '2019',
      title: "3rd prize winner of KidBright Hackathon",
      description: '3rd prize winner of KidBright Hackathon 2019',
      type: 'award',
    },
    {
      date: 'May, 2019 - December, 2020',
      title: 'Developer at Fungjai',
      description: 'Worked at Fungjai & LENSOD as a Developer',
    },
    {
      date: 'January, 2021 - NOW',
      title: 'Project Manager at LayerLink',
      description: 'Working at LayerLink Co,. Ltd. as a Software Project Manager',
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