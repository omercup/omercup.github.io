<template>
  <section class="h-screen flex items-center justify-center bg-background select-none">
    <figure class="p-8 md:p-12 w-5/6 md:w-auto bg-card rounded-4xl flex flex-col text-center gap-8">
      <h1 class="font-primary text-primary text-6xl md:text-7xl font-bold">omercup</h1>
      <p class="font-secondary text-secondary text-xl md:text-2xl flex items-start gap-4 md:w-lg justify-center">
        <Icon
          class="text-icon animate-spin animate-duration-1600 flex-shrink-0 w-7 hidden md:block"
          icon="si-glyph:disc"
          v-if="showIcon"
          width="28"
        />
        <span>{{ songName ? songName : "Loading..." }}</span>
      </p>

      <div class="flex gap-8 justify-center">
        <a
          href="https://discord.com/users/349536885749579777"
          rel="noreferrer noopener"
          target="_blank"
        >
          <Icon
            class="transform transition duration-250 ease-out text-icon w-10 md:w-12 hover:(scale-125 text-primary)"
            icon="simple-icons:discord"
            width="42"
          />
        </a>
        <a 
					href="https://github.com/omercup"
					rel="noreferrer noopener"
					target="_blank
				>
          <Icon
            class="transform transition duration-250 ease-out text-icon w-10 md:w-12 hover:(scale-125 text-primary)"
            icon="simple-icons:github"
            width="42"
          />
        </a>
        <a
					href="https://steamcommunity.com/id/omercup/"
					rel="noreferrer noopener"
					target="_blank"
				>
          <Icon
            class="transform transition duration-250 ease-out text-icon w-10 md:w-12 hover:(scale-125 text-primary)"
            icon="simple-icons:steam"
            width="42"
          />
        </a>
        <a
					href="https://twitter.com/heisomercup"
					rel="noreferrer noopener"
					target="_blank"
				>
          <Icon
            class="transform transition duration-250 ease-out text-icon w-10 md:w-12 hover:(scale-125 text-primary)"
            icon="simple-icons:twitter"
            width="42"
          />
        </a>
      </div>
    </figure>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { useLanyard } from '@leonardssh/use-lanyard';

const showIcon = ref(false);
const songName = ref('');

useLanyard({
  socket: true,
  userId: '349536885749579777',
  onPresenceUpdate(presence) {
    if (presence.listening_to_spotify) {
      showIcon.value = true;
      songName.value = `${presence.spotify.artist} - ${presence.spotify.song}`;
    } else {
      showIcon.value = false;
      songName.value = `I'm not listening to anything right now`;
    }
  }
});
</script>
