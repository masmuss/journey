import { cn } from '@/lib/utils'
import { AllTypes as Post } from 'contentlayer/generated'

import PostCard from './PostCard'

type WritingListPropsType = {
	posts: Post[]
	className: string
}

export default function PostsList(props: Readonly<WritingListPropsType>) {
	const { posts } = props

	return (
		<div className={cn(props.className)}>
			{posts.map((post) => (
				<PostCard post={post} key={post._id} />
			))}
		</div>
	)
}
