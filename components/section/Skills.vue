<template>
  <div id="skills" class="py-24 pb-16 max-w-lg mx-auto text-center">
    <h2 class="font-semibold text-4xl uppercase mb-4"> Skills </h2>
    <div class="flex justify-center w-full shadow-xl">
      <div class="tabs flex-nowrap overflow-x-auto -mb-px px-4">
        <a 
          class="
            tab tab-bordered 
            whitespace-nowrap 
            font-medium 
          "
          :class="selected==i ? 'tab-active dark:text-white dark:border-platinum': 'border-transparent dark:text-gray-400'"
          v-for="(skill, i) in skills"
          :key="i"
          @click="selected=i"
        >
          {{skill.title}}
        </a> 
      </div>
    </div>
    <div class="p-4 pb-8 bg-gray-400 bg-opacity-20 rounded-b-box">
      <ul class="list-inside">
        <li
          v-for="item in skills[selected].list"
          :key="item"
        >
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
@Component
export default class extends Vue {
  selected: number = 1;
  skills = [
    {
      title: 'Programming Language',
      list: [
        'JavaScript',
        'TypeScript',
        'HTML / HTML5',
        'CSS / SCSS / SASS',
        'C / C++',
        'Python',
        'Java',
        'PHP',
      ]
    },
    {
      title: 'Web stack',
      list: [
        'Angular / AngularJS',
        'React.js',
        'Next.js',
        'React-Native',
        'Vue.js',
        'Nuxt.js',
        'Express.js',
        'Node.js',
        'puppeteer',
        'Socket.io',
        'Npm',
        'Git',
        'Restful API',
        'Bootstrap',
        'Ant Design',
        'Tailwind CSS',
        'Font Awesome',
        'LINE LIFF',
        'LINE messaging API',
      ]
    },
    {
      title: 'Tools',
      list: [
        'Figma',
        'Adobe Photoshop',
        'Postman',
        'Visual Studio Code',
        'Android Studio',
        'Unity3D',
      ]
    },
    {
      title: 'Soft skill',
      list: [
        'Web design',
        'Creativity',
        'Public speaking',
        'Events management',
      ]
    },
  ]
}
</script>