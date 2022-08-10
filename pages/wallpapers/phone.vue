<script lang="ts">
import type { File } from "@/types/GitHub"

import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      phoneWallpapers: [] as File[]
    }
  },

  async fetch() {
    this.phoneWallpapers = await this.$http.$get<File[]>(
      "https://api.github.com/repos/omercup/wallpapers/contents/for phones"
    )
  }
})
</script>

<template>
  <main id="wallpapers-phone">
    <SmartImage
      v-for="(wallpaper, index) in phoneWallpapers"
      :key="index"
      ar="9/16"
      width="360"
      height="640"
      :src="wallpaper.download_url"
    />
  </main>
</template>

<style lang="scss">
@use "@/assets/styles/util";

main#wallpapers-phone {
  @include util.grid(4);
}
</style>
