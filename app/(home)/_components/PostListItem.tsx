import Image from 'next/image'
import Link from 'next/link'

import { AllTypes } from '@/.contentlayer/generated'
import { cn, getFormattedDate, readTimeCount } from '@/lib/utils'

export default function PostListItem(props: Readonly<{ post: AllTypes }>) {
	const { post } = props
	return (
		<Link href={post.url} className="w-full">
			<div
				className={cn(
					'group relative mb-5 aspect-video overflow-hidden',
					'md:aspect-4/3',
				)}
			>
				<Image
					alt={post.title}
					src={post.images}
					width={500}
					height={300}
					decoding="async"
					loading="lazy"
					className={cn(
						'aspect-video object-cover brightness-95 transition-all duration-300',
						'md:aspect-4/3',
						'dark:brightness-50',
						'group-hover:scale-110 group-hover:brightness-75',
						'dark:group-hover:brightness-90',
					)}
				/>
			</div>
			<div className="text-center">
				<h1 className="mb-3 font-semibold md:text-lg">{post.title}</h1>
				<div className="space-x-1 text-xs">
					<span>{getFormattedDate(post.publishedAt)}</span>
					<span>&mdash;</span>
					<span>{readTimeCount(post.body.raw)} min read</span>
				</div>
			</div>
		</Link>
	)
}
