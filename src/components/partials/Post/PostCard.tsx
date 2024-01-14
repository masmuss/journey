import Link from 'next/link'

import { cn } from '@/lib/utils'
import { AllTypes as Post } from 'contentlayer/generated'

import PostCardImage from './PostCard/PostCardImage'
import PostDescription from './PostCard/PostDescription'
import PostMeta from './PostCard/PostMeta'
import PostTitle from './PostCard/PostTitle'

export default function PostCard(props: Readonly<{ post: Post }>) {
	const { post } = props
	return (
		<Link href={post.url} className="block w-full">
			<div
				className={cn(
					'group relative mb-5 aspect-4/3 w-full overflow-hidden',
				)}
			>
				<PostCardImage
					title={post.title}
					src={post.images}
					width={500}
					height={300}
				/>
			</div>
			<div className="px-6 text-center md:px-0 md:text-left">
				<PostTitle className={cn('text-lg', 'md:text-2xl')}>
					{post.title}
				</PostTitle>
				<PostDescription
					className={cn('md:px-0 md:text-sm', 'lg:mt-6')}
				>
					{post.description}
				</PostDescription>
				<PostMeta
					publishedAt={post.publishedAt}
					bodyRaw={post.body.raw}
				/>
			</div>
		</Link>
	)
}
