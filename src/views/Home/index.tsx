import { compareDesc } from 'date-fns'

import HomeHeader from '@/components/partials/Home/HomeHeader'
import LatestPost from '@/components/partials/Post/LatestPostCard'
import PostsList from '@/components/partials/Post/PostsList'
import { cn } from '@/lib/utils'
import { AllTypes as Post, allPosts } from 'contentlayer/generated'

export default async function HomePage() {
	const posts = allPosts.sort((a: Post, b: Post) => {
		return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
	})

	const latestPost = posts[0]

	return (
		<>
			<HomeHeader />
			<div className="grid grid-cols-1 gap-y-16 md:gap-10">
				<LatestPost post={latestPost} />
				<PostsList
					posts={posts.slice(1)}
					className={cn(
						'mb-32 grid w-full grid-cols-1 gap-y-16',
						'md:mx-auto md:max-w-2xl md:grid-cols-2 md:gap-10',
						'lg:max-w-5xl lg:grid-cols-3',
					)}
				/>
			</div>
		</>
	)
}
