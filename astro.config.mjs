import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeToc from "rehype-toc";
import rehypeSlug from "rehype-slug";

export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: "github-light",
			wrap: true,
		},
		rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeToc],
	},
});
