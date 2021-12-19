<template>
  <div class="bg-nord2 min-h-screen flex justify-center truncates select-none">
    <div
      class="drop-shadow-2xl shadow-2xl self-center flex flex-col bg-nord4 rounded-3xl font-comfortaa text-2xl md:p-12 p-4"
    >
      <h1 class="md:text-7xl text-4xl self-center font-gloria text-nord9 font-bold md:pb-6">omercup</h1>
      <div class="flex py-4 mx-auto">
        <Icon
          class="mx-2 md:text-3xl text-md animate-spin text-nord11"
          icon="fa-solid:compact-disc"
        />
        <p
          class="text-nord8 md:text-2xl text-base justify-center truncate md:w-full w-72"
        >{{ lanyard }}</p>
      </div>
      <div class="text-nord10 flex space-x-12 self-center md:text-4xl">
        <a
          class="hover:scale-125 transition duration-300 hover:text-nord7"
          href="https://discord.com/users/349536885749579777"
          target="_blank"
          title="Discord"
        >
          <Icon icon="fa-brands:discord" />
        </a>
        <a
          class="hover:scale-125 transition duration-300 hover:text-nord7"
          href="https://github.com/omercup"
          target="_blank"
          title="GitHub"
        >
          <Icon icon="fa-brands:github" />
        </a>
        <a
          class="hover:scale-125 transition duration-300 hover:text-nord7"
          href="https://twitter.com/heisomercup"
          target="_blank"
          title="Twitter"
        >
          <Icon icon="fa-brands:twitter" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { useLanyard } from '@leonardssh/use-lanyard';

const lanyard = ref('');

useLanyard({
  userId: '349536885749579777',
  socket: true,
  onPresenceUpdate(presence) {
    if (presence.listening_to_spotify) {
      lanyard.value = `${presence.spotify.artist} - ${presence.spotify.song}`;
    } else {
      lanyard.value = `I'm not listening to anything right now`;
    }
  }
});
</script>