<template>
	<article>
		<ContentDoc>
			<template v-slot="{ doc }">
				<h1>{{ doc.title }}</h1>
				<p>{{ doc.description }} - {{ formatDate(doc) }}</p>

				<hr class="border-pink" />

				<ContentRenderer :value="doc" />
				<!-- <pre>
<code>{{ JSON.stringify(doc, null, 4) }}</code>
				</pre> -->
			</template>
			<template #empty>
				<h1>that post is real</h1>
				<p>or is it? hey nightlake, amelia here</p>
			</template>

			<template #not-found>
				<h1>that post is not real</h1>
				<p>please get real, ty {{ "<3" }}</p>
			</template>
		</ContentDoc>
	</article>
</template>

<script setup lang="ts">
const formatDate = (doc: any) => {
	const dSplit = doc.date.split("/").map((d: string) => parseInt(d));

	const diff =
		new Date(dSplit[0], dSplit[1] - 1, dSplit[2]).valueOf() -
		Date.now().valueOf();

	const seconds = diff / 1000;
	const minutes = seconds / 60;
	const hours = minutes / 60;
	const days = hours / 24;

	const formatter = new Intl.RelativeTimeFormat("en-US", {
		numeric: "auto",
	});

	if (Math.abs(hours) >= 24) {
		return formatter.format(days, "days");
	} else if (Math.abs(minutes) >= 60) {
		return formatter.format(hours, "hours");
	} else if (Math.abs(seconds) >= 60) {
		return formatter.format(minutes, "minutes");
	} else {
		return formatter.format(seconds, "seconds");
	}
};
</script>
