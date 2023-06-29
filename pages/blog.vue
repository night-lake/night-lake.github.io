<template>
	<template v-if="!$route.params.slug">
		<h1>blog</h1>
		<p>
			i genuinely have no idea why i have this when i have tumblr/cohost
		</p>

		<ContentList path="/blog">
			<template v-slot="{ list }">
				<div
					v-for="article in list"
					:key="article._path"
					class="p-2 bg-crust/60 rounded-md mb-4"
				>
					<h2>{{ article.title }}</h2>
					<p>{{ article.description }}</p>
				</div>
			</template>

			<template #not-found>
				<p>no articles found.</p>
			</template>
		</ContentList>
	</template>

	<NuxtPage />
</template>
