<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    src: {
      type: String,
      required: false,
      default: null
    },
    width: {
      type: String,
      required: false,
      default: null
    },
    height: {
      type: String,
      required: false,
      default: null
    },
    ar: {
      type: String,
      required: false,
      default: "1/1"
    }
  },

  data() {
    return {
      loaded: false
    }
  }
})
</script>

<template>
  <a
    :href="src"
    target="_blank"
    rel="noopener noreferrer"
    :class="{ 'smart-image-container': true, loaded }"
    :style="{ aspectRatio: ar }"
  >
    <nuxt-img
      class="smart-image"
      :src="src"
      format="webp"
      loading="lazy"
      :width="width"
      :height="height"
      :draggable="false"
      @load="loaded = true"
    />
  </a>
</template>

<style lang="scss">
a.smart-image-container {
  flex-shrink: 0;
  overflow: hidden;
  display: inline-flex;
  background: #202020;

  img.smart-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 150ms opacity;
  }

  &:not(.loaded) {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
}
</style>
