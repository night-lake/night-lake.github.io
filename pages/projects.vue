<template>
	<h1>projects</h1>
	<p>
		stuff ive either made or contribute to. most of these are probably too
		specialized
	</p>

	<div
		v-for="project in projects"
		:key="project.name"
		class="p-2 bg-crust/60 rounded-md mb-4"
	>
		<div class="flex flex-row justify-between">
			<div class="flex-1/2">
				<h2>{{ project.name }}</h2>
			</div>
			<div class="flex-1/2 flex flex-row gap-2">
				<NuxtLink
					v-if="project.website"
					:to="project.website"
					class="hover:text-pink transition-colors duration-200"
				>
					<Icon size="32" name="mdi:earth" />
				</NuxtLink>

				<NuxtLink
					:to="project.repo"
					class="hover:text-pink transition-colors duration-200"
				>
					<Icon size="32" name="bxl:github" />
				</NuxtLink>
			</div>
		</div>
		<p class="mb-0 mt-1">{{ project.desc }}</p>

		<p class="mb-0">
			<b class="text-overlay2">made with:</b>
			{{ format.format(project.stack) }}
		</p>
	</div>
</template>

<script setup lang="ts">
import { Project } from "~/util/types";

const projects: Project[] = [
	{
		name: "djs-localized-builders",
		desc: "a set of builders for discord.js made with localization in mind",
		repo: "https://github.com/night-lake/djs-localized-builders",
		stack: ["typescript"],
	},
	{
		name: "qc-nicks",
		desc: "a tool to help with coloring your nickname on queercraft",
		website: "https://sadie.is-a.dev/qc-nicks",
		repo: "https://github.com/night-lake/qc-nicks",
		stack: ["nuxt", "typescript", "tailwind"],
	},
	{
		name: "fluorine",
		desc: "fantastic discord bot, perfect for your discord server",
		website: "https://fluorine.me",
		repo: "https://github.com/Fluorinebot/fluorine",
		stack: ["discord.js", "typescript", "postgres", "prisma"],
	},
	{
		name: "gasbot",
		desc: "a bot to protect your server from the letter g",
		website: "https://h-projects.github.io/gasbot/",
		repo: "https://github.com/h-projects/gasbot",
		stack: ["discord.js", "sqlite", "typescript"],
	},
	// {
	// 	name: "",
	// 	desc: "I too love recursion.",
	// 	website: "https://sadie.is-a.dev/",
	// 	repo: "https://github.com/night-lake/night-lake.github.io",
	// 	tech: ["Next.js", "typescript", "TailwindCSS"],
	// },
];

const format = new Intl.ListFormat("en-US", {
	style: "long",
	type: "conjunction",
});
</script>
