<template>
  <section class="h-screen flex items-center justify-center bg-bg">
    <figure class="p-8 md:p-16 w-5/6 md:w-auto bg-card rounded-4xl flex flex-col text-center gap-8">
      <h1 class="font-secondary text-secondary text-6xl md:text-7xl font-bold">omercup</h1>
      <p class="font-primary text-primary text-xl md:text-2xl flex items-start gap-4 md:w-lg justify-center">
        <Disc class="text-icon animate-spin animate-duration-1600 flex-shrink-0 w-7 hidden md:block" v-if="lanyard" />
        <span>{{ lanyard ? lanyard : "I'm not listening to anything right now" }}</span>
      </p>

      <div class="flex gap-8 justify-center">
        <a href="https://discord.com/users/349536885749579777" target="_blank" rel="noreferrer noopener"><Discord class="transform transition duration-250 ease-out text-icon w-10 md:w-12 hover:(scale-125 text-secondary)" /></a>
        <a href="https://github.com/omercup" target="_blank" rel="noreferrer noopener"><GitHub class="transform transition duration-250 ease-out text-icon w-10 md:w-12 hover:(scale-125 text-secondary)" /></a>
        <a href="https://twitter.com/heisomercup" target="_blank" rel="noreferrer noopener"><Twitter class="transform transition duration-250 ease-out text-icon w-10 md:w-12 hover:(scale-125 text-secondary)" /></a>
      </div>
    </figure>
  </section>
</template>

<script setup>
import { ref } from "vue"
import { useLanyard } from "@leonardssh/use-lanyard"

import Disc from "./icons/disc.svg?component"
import GitHub from "./icons/github.svg?component"
import Discord from "./icons/discord.svg?component"
import Twitter from "./icons/twitter.svg?component"

const lanyard = ref(null)

useLanyard({
  socket: true,
  userId: "349536885749579777",
  onPresenceUpdate(presence) {
    if (presence.listening_to_spotify) lanyard.value = `${presence.spotify.artist} - ${presence.spotify.song}`; else lanyard.value = null
  }
})
</script>
