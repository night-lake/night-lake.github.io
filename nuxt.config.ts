// @ts-expect-error
import catppuccin from "@catppuccin/tailwindcss";
import typography from "@tailwindcss/typography";

export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
	tailwindcss: {
		config: {
			content: [],
			plugins: [catppuccin({ defaultFlavor: "frappe" }), typography()],
		},
	},
});
