<template>
	<Body class="latte dark:frappe bg-mantle">
		<div :class="rootElement" class="py-4">
			<header class="flex flex-row items-center gap-3">
				<img
					alt=""
					:src="me.avatar"
					class="rounded-full h-24 w-24 my-4 aspect-square"
				/>

				<div class="flex flex-col gap-2 justify-center flex-1">
					<h1 class="text-pink -mb-4">{{ me.fullName }}</h1>
					<p class="text-surface-2">@{{ me.username }}</p>
				</div>
			</header>
			<nav class="grid grid-cols-2 md:grid-cols-4 gap-4">
				<NuxtLink
					v-for="tab in tabs"
					:key="tab"
					:to="`/${tab}`"
					class="p-2 text-center hover:bg-pink/50 rounded-md transition-colors duration-250 hover:text-white"
					active-class="text-black bg-pink font-semibold"
				>
					{{ tab.length > 0 ? tab : "about" }}
				</NuxtLink>
			</nav>
		</div>

		<div class="bg-base">
			<main
				:class="rootElement"
				class="py-3 prose-headings:my-2 prose-h1:text-pink prose-h2:text-pink prose-h2:font-bold prose-hr:my-2"
			>
				<NuxtLoadingIndicator />
				<NuxtPage />
			</main>
		</div>

		<footer :class="rootElement" class="p-3">
			<div class="my-2 flex flex-row justify-between items-center">
				<span>you're gae {{ "<3" }}</span>

				<div class="flex flex-row gap-2">
					<NuxtLink
						to="https://github.com/night-lake"
						rel="me"
						class="hover:text-pink transition-colors duration-200"
					>
						<Icon size="24" name="bxl:github" />
					</NuxtLink>

					<NuxtLink
						to="https://tech.lgbt/@nightlake"
						rel="me"
						class="hover:text-pink transition-colors duration-200"
					>
						<Icon size="24" name="bxl:mastodon" />
					</NuxtLink>
				</div>
			</div>
			<small class="my-none">
				made with {{ "<3" }} using
				<NuxtLink
					class="hover:text-pink transition-colors duration-200"
					to="https://github.com/catppuccin/"
				>
					catppuccin</NuxtLink
				>. pfp by
				<NuxtLink
					class="hover:text-pink transition-colors duration-200"
					to="https://twitter.com/ame_929"
				>
					@Ame_929
				</NuxtLink>
			</small>
		</footer>
	</Body>
</template>

<script setup lang="ts">
const rootElement = "prose dark:prose-invert md:max-w-6xl mx-auto";

const route = useRoute();
const me = usePronounsInfo();

const tabs = ["", "pronouns", "projects", "blog"];
</script>
