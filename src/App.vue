<template>
	<div id="theme" class="dark">
		<section
			class="bg-white flex h-screen text-black transition duration-250 items-center justify-center select-none dark:bg-black dark:text-white"
		>
			<figure
				class="flex flex-col text-center w-11/12 gap-6 md:w-auto md:gap-8"
			>
				<h1
					@click="switchTheme"
					class="cursor-pointer font-primary font-bold text-5xl md:text-6xl"
				>
					omercup
				</h1>
				<p
					class="flex font-secondary text-lg gap-4 items-start justify-center md:text-xl md:w-lg"
				>
					<Icon
						class="flex-shrink-0 animate-spin w-6 animate-duration-1600"
						icon="si-glyph:disc"
						v-if="showIcon"
						width="28"
					/>
					<a
						class="truncate decoration-1 hover:underline"
						target="_blank"
						rel="noreferrer noopener"
						v-bind:href="
							songLink
								? songLink
								: 'https://open.spotify.com/track/57g9uWuZI1t822eLvEVQjn?si=0'
						"
						v-bind:title="songName ? songName : 'Loading...'"
					>
						{{ songName ? songName : 'Loading...' }}
					</a>
				</p>

				<div class="flex gap-6 justify-center">
					<a
						href="https://discord.com/users/349536885749579777"
						target="_blank"
						rel="noreferrer noopener"
					>
						<Icon
							class="transform transition ease-out w-7 duration-250 md:w-10 hover:scale-125"
							icon="simple-icons:discord"
							width="35"
						/>
					</a>
					<a
						href="https://github.com/omercup"
						target="_blank"
						rel="noreferrer noopener"
					>
						<Icon
							class="transform transition ease-out w-7 duration-250 md:w-10 hover:(scale-125)"
							icon="simple-icons:github"
							width="35"
						/>
					</a>
					<a
						href="https://steamcommunity.com/id/omercup/"
						target="_blank"
						rel="noreferrer noopener"
					>
						<Icon
							class="transform transition ease-out w-7 duration-250 md:w-10 hover:(scale-125)"
							icon="simple-icons:steam"
							width="35"
						/>
					</a>
					<a
						href="https://twitter.com/heisomercup"
						target="_blank"
						rel="noreferrer noopener"
					>
						<Icon
							class="transform transition ease-out w-7 duration-250 md:w-10 hover:(scale-125)"
							icon="simple-icons:twitter"
							width="35"
						/>
					</a>
				</div>
			</figure>
		</section>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import { useLanyard } from '@leonardssh/use-lanyard';

const showIcon = ref(false);
const songLink = ref('');
const songName = ref('');

function switchTheme() {
	if (document.getElementById('theme')?.classList.contains('dark')) {
		document.getElementById('theme')?.classList.remove('dark');
		document.getElementById('theme')?.classList.add('light');
	} else {
		document.getElementById('theme')?.classList.remove('light');
		document.getElementById('theme')?.classList.add('dark');
	}
}

useLanyard({
	socket: true,
	userId: '349536885749579777',
	onPresenceUpdate(presence) {
		if (presence.listening_to_spotify) {
			showIcon.value = true;
			songLink.value = `https://open.spotify.com/track/${
				presence.spotify!.track_id
			}`;
			songName.value = `${presence.spotify!.artist} - ${
				presence.spotify!.song
			}`;
		} else {
			showIcon.value = false;
			songLink.value =
				'https://open.spotify.com/track/57g9uWuZI1t822eLvEVQjn?si=0';
			songName.value = `I'm not listening to anything right now`;
		}
	},
});
</script>
