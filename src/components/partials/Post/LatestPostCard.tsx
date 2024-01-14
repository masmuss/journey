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
		<Link
			href={post.url}
			className={cn(
				'mx-auto w-full',
				'md:mx-auto md:grid md:max-w-2xl md:grid-cols-2',
				'xl:max-w-5xl',
			)}
		>
			<div
				className={cn(
					'md:col-span-2',
					'xl:flex xl:items-center xl:justify-between xl:gap-8',
				)}
			>
				<div
					className={cn(
						'group mb-5 aspect-4/3 w-full overflow-hidden',
						'xl:col-start-1 xl:mb-0',
					)}
				>
					<PostCardImage
						title={post.title}
						src={post.images}
						width={500}
						height={300}
					/>
				</div>

				<div
					className={cn(
						'w-full text-center',
						'xl:col-start-2 xl:text-left',
					)}
				>
					<PostTitle
						className={cn('text-xl', 'md:text-4xl', 'xl:text-5xl')}
					>
						{post.title}
					</PostTitle>
					<PostDescription
						className={cn(
							'md:px-6 md:text-base',
							'xl:mt-8 xl:px-0',
						)}
					>
						{post.description}
					</PostDescription>
					<PostMeta
						publishedAt={post.publishedAt}
						bodyRaw={post.body.raw}
					/>
				</div>
			</div>
		</Link>
	)
}
