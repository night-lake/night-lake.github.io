<template>
	<h1 class="text-rosewater dark:text-pink">
		hi its {{ me.fullName }} again :p
	</h1>
	<p>
		there's not much here, check out these
		<NuxtLink to="/pronouns">pronouns</NuxtLink> tho
	</p>
</template>

<script setup lang="ts">
const me = usePronounsInfo();
</script>
