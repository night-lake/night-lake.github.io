<template>
	<h1>pronouns</h1>

	<div class="mb-4 flex flex-row items-center gap-3">
		<span class="font-semibold">icon key: </span>

		<Icon name="ic:round-favorite" size="24" class="text-pink" />
		<span>yes</span>

		<Icon name="ic:round-people-alt" size="24" class="text-red" />
		<span>only if we're close</span>

		<Icon name="mdi:emoticon-tongue" size="24" class="text-peach" />
		<span>jokingly</span>

		<Icon name="ic:round-question-mark" size="24" class="text-teal" />
		<span>maybe</span>

		<Icon name="ic:baseline-label" size="24" class="text-mauve" />
		<span>nickname</span>

		<Icon name="mdi:test-tube-empty" size="24" class="text-green" />
		<span>testing</span>

		<Icon name="ic:round-thumb-up" size="24" />
		<span>okay</span>

		<Icon name="ic:round-thumb-down" size="24" class="text-overlay0" />
		<span>nope</span>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 mb-4">
		<div>
			<h2>names</h2>
			<PronounListing
				v-for="item in me.names"
				:key="item.value"
				:pronoun="item"
			/>
		</div>
		<div>
			<h2>pronouns</h2>
			<PronounListing
				v-for="item in me.pronouns"
				:key="item.value"
				:pronoun="item"
			/>
		</div>

		<div>
			<h2>flags</h2>
			<div
				v-for="flag in me.flags"
				:key="flag.name"
				class="flex flex-row gap-2 items-center pb-2"
			>
				<img
					alt=""
					:src="flag.flagURI"
					class="my-0 w-16 h-9 aspect-video rounded-md"
				/>
				<span>{{ flag.name }}</span>
			</div>
		</div>
	</div>

	<h2 class="my-none mb-1">words</h2>

	<div class="grid grid-cols-1 md:grid-cols-4 mb-2">
		<div v-for="section in me.words" :key="section.header">
			<h3>{{ section.header }}</h3>
			<PronounListing
				v-for="item in section.values"
				:key="item.value"
				:pronoun="item"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
const me = usePronounsInfo();
</script>
