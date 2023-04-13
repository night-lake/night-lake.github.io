<template>
	<Body class="latte dark:frappe bg-mantle">
		<div :class="rootElement">
			<header class="flex flex-row items-center gap-3">
				<img
					alt=""
					:src="me.avatar"
					class="rounded-full h-24 w-24 my-4"
				/>

				<div class="flex flex-col gap-2 justify-center">
					<h1 class="text-pink -mb-4">{{ me.fullName }}</h1>
					<p class="text-surface-2">@{{ me.username }}</p>
				</div>
			</header>
			<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
				<NuxtLink
					v-for="tab in tabs"
					:key="tab"
					:to="`/${tab}`"
					class="p-2 text-pink text-center hover:bg-pink/50 rounded-md transition-colors duration-250 hover:text-white"
					active-class="bg-pink text-black font-semibold"
				>
					<span>{{ tab }}</span>
				</NuxtLink>
			</div>
		</div>

		<div class="bg-base">
			<main :class="rootElement">
				<NuxtLoadingIndicator />
				<NuxtPage />
			</main>
		</div>
		<footer :class="rootElement" class="text-center">
			<p>you're gae {{ "<3" }}</p>
		</footer>
	</Body>
</template>

<script setup lang="ts">
const rootElement = "prose dark:prose-invert md:max-w-6xl mx-auto py-3";

const route = useRoute();
const me = usePronounsInfo();

const tabs = ["pronouns", "projects", "me"];
</script>
