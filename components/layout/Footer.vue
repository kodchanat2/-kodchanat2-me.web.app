<template>
  <footer class="p-20 w-full footer bg-gray-500 bg-opacity-20 footer-center">
    <div class="grid grid-flow-col gap-4">
      <a class="link link-hover underline" @click="scrollTop">scroll to top</a> 
    </div> 
    <div>
      contact me
      <div class="grid grid-flow-col gap-4">
        <a
          v-for="(contact, i) in contacts"
          :key="i"
          class="hover:text-black dark:hover:text-white"
          :href="contact.link"
        >
          <fa-icon :icon="contact.icon" size="3x"  />
        </a>
      </div>
    </div> 
    <div>
      <p>Copyright © 2021 - All right reserved by Kodchanat2</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
@Component
export default class extends Vue {
  contacts = [
    {
      icon: this.facebook,
      link: 'https://www.facebook.com/kodchanat2/'
    },
    {
      icon: this.github,
      link: 'https://github.com/kodchanat2'
    },
    {
      icon: this.linkedIn,
      link: 'https://www.linkedin.com/in/kodchanat2'
    },
  ]
  isTop: boolean = true;

  get linkedIn(){
    return ['fab', 'linkedin'];
  }

  get facebook(){
    return ['fab', 'facebook-square'];
  }

  get github(){
    return ['fab', 'github-square'];
  }

  scrollTop() {
    window.scroll({
      behavior: 'smooth',
      top: 0,
    });
  }
}
</script>
