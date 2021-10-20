<template>
  <div class="h-16 mb-4 w-screen z-20">
    <div class="fixed w-full">
      <div :class="{'shadow-lg': !isTop}" class="navbar mb-2 transition-shadow duration-300 bg-white dark:bg-black relative">
        <div class="flex-1 font-semibold px-8 text-2xl flex justify-center md:justify-start pointer-events-none">
          JOHN
        </div>
        <div class="flex-none hidden px-2 mx-2 md:flex">
          <div class="flex items-stretch">
            <a 
              class="btn btn-ghost btn-sm rounded-btn"
              v-for="(menuItem, i) in menu"
              :key="i"
            >
              {{menuItem.title}}
            </a> 
          </div>
        </div> 
        <div class="flex-none absolute right-4 md:hidden">
          <button class="btn btn-square btn-ghost">
            v
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
@Component
export default class extends Vue {
  menu: Array<any> = [
    {
      title: 'About me',
    },
    {
      title: 'Skills',
    },
    {
      title: 'Portfolio',
    },
  ]
  isTop: boolean = true;

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(){
    this.isTop = window.pageYOffset <= 0
  }


  scrollTop() {
    window.scroll({
      behavior: 'smooth',
      top: 0,
    });
  }
}
</script>
