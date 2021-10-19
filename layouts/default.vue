<template>
  <div class="flex flex-col w-full bg-white">
    <LayoutNavbar />
    <Nuxt class="min-h-screen w-full" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class extends Vue {

}
</script>
