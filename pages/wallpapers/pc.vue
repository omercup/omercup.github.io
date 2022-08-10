<script lang="ts">
import type { File } from "@/types/GitHub"

import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      pcWallpapers: [] as File[]
    }
  },

  async fetch() {
    this.pcWallpapers = await this.$http.$get<File[]>(
      "https://api.github.com/repos/omercup/wallpapers/contents/for pcs"
    )
  }
})
</script>

<template>
  <main id="wallpapers-pc">
    <SmartImage
      v-for="(wallpaper, index) in pcWallpapers"
      :key="index"
      ar="16/9"
      width="640"
      height="360"
      :src="wallpaper.download_url"
    />
  </main>
</template>

<style lang="scss">
@use "@/assets/styles/util";

main#wallpapers-pc {
  @include util.grid(4);
}
</style>
