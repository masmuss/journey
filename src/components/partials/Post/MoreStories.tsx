import { notoSerif } from '@/config/fonts'
import { cn } from '@/lib/utils'
import { Post } from 'contentlayer/generated'

import PostCard from './PostCard'

type MorePostProps = {
	moreStories: Post[]
}

export default function MoreStories({ moreStories }: Readonly<MorePostProps>) {
	return (
		<section>
			<h2
				className={cn(
					notoSerif.className,
					'mb-8 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl',
				)}
			>
				More Stories
			</h2>
			<div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-14 md:gap-y-20 lg:gap-x-24">
				{moreStories.map((moreStory) => (
					<PostCard key={moreStory.url} post={moreStory} />
				))}
			</div>
		</section>
	)
}
