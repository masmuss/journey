import Link from 'next/link'

import { cn } from '@/lib/utils'
import { AllTypes as Post } from 'contentlayer/generated'

import PostCardImage from './PostCard/PostCardImage'
import PostDescription from './PostCard/PostDescription'
import PostMeta from './PostCard/PostMeta'
import PostTag from './PostCard/PostTag'
import PostTitle from './PostCard/PostTitle'

type PostCardProps = {
	post: Post
	className?: string
}

export default function PostCard(props: Readonly<PostCardProps>) {
	const { post, className } = props
	return (
		<Link href={post.url} className={cn('group block w-full', className)}>
			<div className={cn('group relative mb-4 w-full overflow-hidden')}>
				<PostCardImage
					title={post.title}
					src={post.images}
					width={500}
					height={300}
					className="md:aspect-video"
				/>
			</div>
			<div className="px-6 text-center md:px-0 md:text-left">
				<div className="mb-2 flex flex-wrap justify-center gap-2 p-4 md:justify-start md:p-0">
					{post.tags.map((tag) => (
						<PostTag key={tag}>{tag}</PostTag>
					))}
				</div>
				<PostTitle
					className={cn('mb-3 text-2xl leading-snug md:text-3xl')}
				>
					{post.title}
				</PostTitle>
				<PostDescription
					className={cn('mb-4 text-base leading-relaxed md:text-lg')}
				>
					{post.description}
				</PostDescription>
				<PostMeta
					className="mt-4 md:text-lg lg:mt-4"
					publishedAt={post.publishedAt}
					bodyRaw={post.body.raw}
				/>
			</div>
		</Link>
	)
}
