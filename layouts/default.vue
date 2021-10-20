<template>
  <div 
    class="flex flex-col w-full" 
    :class="darkMode? 'bg-dark text-white dark': 'bg-white text-dark'"
  >
    <LayoutNavbar />
    <Nuxt class="min-h-screen w-full" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator';
const layouts = namespace('layouts')

@Component
export default class extends Vue {
  @layouts.State
  darkMode!: boolean;
}
</script>
