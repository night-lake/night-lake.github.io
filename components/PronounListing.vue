<template>
	<div class="flex flex-row gap-2 items-center">
		<Icon
			v-if="pronoun.opinion === PronounOpinion.Yes"
			name="ic:round-favorite"
			size="24"
			class="text-pink"
		/>
		<Icon
			v-if="pronoun.opinion === PronounOpinion.OnlyIfClose"
			name="ic:round-people-alt"
			size="24"
			class="text-red"
		/>
		<Icon
			v-if="pronoun.opinion === PronounOpinion.Jokingly"
			name="mdi:emoticon-tongue"
			size="24"
			class="text-peach"
		/>
		<Icon
			v-if="pronoun.opinion === PronounOpinion.Maybe"
			name="ic:round-question-mark"
			size="24"
			class="text-teal"
		/>
		<Icon
			v-if="pronoun.opinion === PronounOpinion.Nickname"
			name="ic:baseline-label"
			size="24"
			class="text-mauve"
		/>
		<Icon
			v-if="pronoun.opinion === PronounOpinion.Testing"
			name="mdi:test-tube-empty"
			size="24"
			class="text-green"
		/>
		<Icon
			v-if="pronoun.opinion === PronounOpinion.Okay"
			name="ic:round-thumb-up"
			size="24"
		/>
		<Icon
			v-if="pronoun.opinion === PronounOpinion.Nope"
			name="ic:round-thumb-down"
			size="24"
			class="text-overlay0"
		/>

		<span
			:class="{
				'text-pink font-bold': pronoun.opinion === PronounOpinion.Yes,
				'text-red font-medium':
					pronoun.opinion === PronounOpinion.OnlyIfClose,
				'text-peach': pronoun.opinion === PronounOpinion.Jokingly,
				'text-mauve italic':
					pronoun.opinion === PronounOpinion.Nickname,
				'text-green italic': pronoun.opinion === PronounOpinion.Testing,
				'text-teal': pronoun.opinion === PronounOpinion.Maybe,
				'text-overlay0': pronoun.opinion === PronounOpinion.Nope,
			}"
			>{{ pronoun.value }}</span
		>
	</div>
</template>

<script setup lang="ts">
import { PronounOpinion, PronounsListing } from "~/util/types";

defineProps<{ pronoun: PronounsListing }>();
</script>
