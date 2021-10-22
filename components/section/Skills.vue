<template>
  <div id="skills" class="py-24 pb-16  text-center">
    <h2 class="font-semibold text-4xl uppercase mb-4"> Skills </h2>
    <div class="flex justify-center">
      <div class="tabs flex-nowrap overflow-x-auto px-4">
        <a 
          class="tab tab-bordered whitespace-nowrap dark:text-platinum"
          :class="{'tab-active': selected==i}"
          v-for="(skill, i) in skills"
          :key="i"
          @click="selected=i"
        >
          {{skill.title}}
        </a> 
      </div>
    </div>
    <div class="max-w-lg mx-auto p-4 pb-8 bg-gray-400 bg-opacity-20">
      <ul class="list-disc list-inside">
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
      title: 'lorem loremloremlorem',
      list: [
        'asd',
        'asd',
        'asd',
      ]
    },
    {
      title: 'lorem lorlorem',
      list: [
        'asd',
        'asd',
        'asd',
      ]
    },
    {
      title: 'lorem lorlorem',
      list: [
        'asd',
        'asd',
        'asd',
      ]
    },
  ]
}
</script>