<script lang="ts">
import type { LanyardData } from "@eggsydev/vue-lanyard/@types/lanyard"

import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      newData: false,
      lanyard: {} as LanyardData,
      socket: null as WebSocket | null
    }
  },

  computed: {
    getStatus(): string {
      const lanyard = this.lanyard
      if (!lanyard) return "Couldn't fetch data from Lanyard"

      if (lanyard.spotify) {
        const { song, artist } = lanyard.spotify || {}
        return `${artist} - ${song}`
      } else return "i'm not listening to anything right now"
    },

    statusLoaded(): boolean {
      return Object.keys(this.lanyard).length !== 0
    }
  },

  async mounted() {
    this.socket = (await this.$lanyard({
      userId: "349536885749579777",
      socket: true
    })) as WebSocket

    this.socket.addEventListener("message", ({ data }) => {
      const { t: type, d: status } = JSON.parse(data) as {
        t: "INIT_STATE" | "PRESENCE_UPDATE"
        d: LanyardData
      }

      if (type === "INIT_STATE" || type === "PRESENCE_UPDATE")
        this.lanyard = status || {}

      this.newData = !this.newData
    })
  }
})
</script>

<template>
  <main id="home-page">
    <h1>omercup</h1>

    <div class="status">
      <Icon
        v-show="statusLoaded && lanyard.spotify"
        icon="si-glyph:disc"
        width="1.5rem"
      />
      <p>{{ statusLoaded ? getStatus : "Loading..." }}</p>
    </div>

    <div class="links">
      <a
        href="https://discord.com/users/349536885749579777"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="simple-icons:discord" width="2rem" />
      </a>
      <a
        href="https://github.com/omercup"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="simple-icons:github" width="2rem" />
      </a>
      <a
        href="https://www.last.fm/user/omercup"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="simple-icons:lastdotfm" width="2rem" />
      </a>
      <a
        href="https://mastodon.social/@omercup"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="simple-icons:mastodon" width="2rem" />
      </a>
      <a
        href="https://steamcommunity.com/id/omercup"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="simple-icons:steam" width="2rem" />
      </a>
      <a
        href="https://twitter.com/heisomercup"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="simple-icons:twitter" width="2rem" />
      </a>
    </div>

    <div class="decoration">
      <div />
      <div />
    </div>
  </main>
</template>

<style lang="scss">
@use "assets/styles/util";

main#home-page {
  @include util.flex(column, 2rem, center, center);

  div.status {
    min-height: 2rem;
    padding-inline: 0.5rem;
    @include util.flex(row, 1rem, center);

    svg {
      animation: 2s spin linear infinite;
    }

    p {
      @include util.line-clamp(1);
    }
  }

  div.links {
    @include util.flex(row, 1.5rem);

    a {
      transition: 250ms transform;
      &:hover {
        transform: scale(125%);
      }
    }
  }
}
</style>
