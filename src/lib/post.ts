import { Post, allPosts } from 'contentlayer/generated'

export const moreStories = (post: Post) => {
	const index = allPosts.findIndex((p: Post) => p._id === post._id)
	if (index === allPosts.length - 1) {
		return allPosts.slice(0, 1)
	}
	const nextPosts = allPosts.slice(index + 1, index + 3)
	return nextPosts
}
