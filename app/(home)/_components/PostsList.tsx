'use client'
import { compareDesc } from 'date-fns'

import { cn } from '@/lib/utils'
import { AllTypes } from 'contentlayer/generated'

import PostListItem from './PostListItem'

type WritingListPropsType = {
	posts: AllTypes[]
	className: string
}

export default function PostsList(props: Readonly<WritingListPropsType>) {
	const { posts } = props

	posts.sort((a: AllTypes, b: AllTypes) => {
		return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
	})

	return (
		<div className={cn(props.className)}>
			{posts.map((post) => (
				<PostListItem post={post} key={post._id} />
			))}
		</div>
	)
}
