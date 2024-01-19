import Link from 'next/link'

import { cn } from '@/lib/utils'
import { AllTypes as Post } from 'contentlayer/generated'

import PostCardImage from './PostCard/PostCardImage'
import PostDescription from './PostCard/PostDescription'
import PostMeta from './PostCard/PostMeta'
import PostTitle from './PostCard/PostTitle'

export default function LatestPostCard(props: Readonly<{ post: Post }>) {
	const { post } = props
	return (
		<Link href={post.url}>
			<div className="mb-8 md:mb-16">
				<PostCardImage
					title={post.title}
					src={post.images}
					width={500}
					height={300}
					className="aspect-video"
				/>
			</div>

			<div
				className={cn(
					'mb-20',
					'md:mb-28 md:grid md:grid-cols-2 md:gap-x-16',
					'lg:gap-x-8',
				)}
			>
				<div>
					<PostTitle
						className={cn(
							'mb-4 text-4xl leading-tight',
							'lg:text-6xl',
							'xl:text-5xl',
						)}
					>
						{post.title}
					</PostTitle>
					<PostMeta
						publishedAt={post.publishedAt}
						bodyRaw={post.body.raw}
						className="mb-4 text-lg md:mb-0"
					/>
				</div>

				<div>
					<PostDescription className="mb-4 text-lg leading-relaxed">
						{post.description}
					</PostDescription>
				</div>
			</div>
		</Link>
	)
}
