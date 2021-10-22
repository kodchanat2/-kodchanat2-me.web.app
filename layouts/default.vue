<template>
  <div 
    class="flex flex-col overflow-x-hidden" 
    :class="darkMode? 'bg-dark text-platinum dark': 'bg-platinum text-dark'"
  >
    <LayoutNavbar/>
    <Nuxt class="min-h-screen" />
    <LayoutFooter/>
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
