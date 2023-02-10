export const readTime = (rawContent: string) => {
	const wpm = 225;
	const words = rawContent.trim().split(/\s+/).length;
	return Math.ceil(words / wpm);
};
