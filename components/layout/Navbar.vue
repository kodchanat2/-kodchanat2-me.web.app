<template>
  <div class="h-16 mb-4 w-full z-40">
    <div class="fixed w-full">
      <div :class="{'shadow-lg': !isTop}" class="navbar mb-2 transition-shadow duration-300 bg-platinum dark:bg-dark relative">
        <div class="flex-1 flex justify-center md:justify-start">
          <div data-tip="toggle darkmode" class="md:tooltip md:tooltip-bottom">
            <div class="group font-semibold px-8 text-2xl flex justify-center cursor-pointer dark:text-orange" @click="toggleTheme">
              J
              <fa-layers>
                <fa-icon :icon="['far', 'moon']" transform="shrink-2 down-2" class="transition-opacity duration-500 text-orange dark:text-platinum opacity-100 group-hover:opacity-0" />
                <fa-icon :icon="['fas', 'moon']" transform="shrink-2 down-2" class="transition-opacity duration-500 text-dark dark:text-orange opacity-0 group-hover:opacity-100" />
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
          <div class="dropdown dropdown-end">
            <button tabindex="0" class="btn btn-square btn-ghost">
              <fa-icon icon="bars" size="2x" />
            </button>
            <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-platinum dark:bg-dark rounded-box w-52 z-20">
              <li
                v-for="(menuItem, i) in menu"
                :key="i"
              >
                <a @click="scrollId(menuItem.link)">{{menuItem.title}}</a>
              </li>
            </ul>
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
    this.isTop = window.pageYOffset <= 80
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
