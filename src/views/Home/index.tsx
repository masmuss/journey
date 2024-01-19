import { compareDesc } from 'date-fns'

import LatestPost from '@/components/partials/Post/LatestPostCard'
import MoreStories from '@/components/partials/Post/MoreStories'
import { AllTypes as Post, allPosts } from 'contentlayer/generated'

export default async function HomeView() {
	const posts = allPosts.sort((a: Post, b: Post) => {
		return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
	})

	return (
		<>
			{/* <HomeHeader /> */}
			<LatestPost post={posts[0]} />
			<MoreStories moreStories={posts.slice(1)} />
		</>
	)
}
