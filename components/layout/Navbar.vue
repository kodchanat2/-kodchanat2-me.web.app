<template>
  <div class="h-16 mb-4 w-full z-40">
    <div class="fixed w-full overflow-hidden">
      <div :class="{'shadow-lg': !isTop}" class="navbar mb-2 transition-shadow duration-300 bg-platinum dark:bg-dark relative">
        <div class="flex-1 flex justify-center md:justify-start">
          <div data-tip="toggle darkmode" class="md:tooltip md:tooltip-bottom">
            <div class="group font-semibold px-8 text-2xl flex justify-center cursor-pointer dark:text-orange" @click="toggleTheme">
              J
              <fa-layers>
                <fa-icon :icon="['far', 'lightbulb']" transform="grow-4 down-5" class="transition-opacity duration-500 text-orange dark:text-platinum opacity-100 group-hover:opacity-0" />
                <fa-icon :icon="['fas', 'lightbulb']" transform="grow-4 down-5" class="transition-opacity duration-500 text-dark dark:text-orange opacity-0 group-hover:opacity-100" />
              </fa-layers>
              HN
            </div>
          </div>
        </div>
        <div class="flex-none hidden px-2 mx-2 md:flex">
          <div class="flex items-stretch">
            <a 
              class="btn btn-ghost btn-sm rounded-btn"
              v-for="(menuItem, i) in menu"
              :key="i"
              @click="scrollId(menuItem.link)"
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
      title: 'Profile',
      link: '#profile',
    },
    {
      title: 'Skills',
      link: '#skills',
    },
    {
      title: 'Portfolio',
      link: '#portfolio',
    },
  ]
  isTop: boolean = true;

  mounted() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(){
    this.isTop = window.pageYOffset <= 0
  }

  toggleTheme(){
    this.$store.commit("layouts/toggleDarkMode");
  }

  scrollId = (hash: string) => {
    let elem = document.querySelector(hash);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
</script>
