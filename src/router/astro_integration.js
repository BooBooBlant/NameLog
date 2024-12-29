import pages from "astro-pages";

export const pages = pages({
	dir: ".",
	glob: ["**.page.{astro,md}"],
	pattern: ({ pattern }) =>
		pattern.replace(/\.page$/, "").replace(/index$/, ""),
});
