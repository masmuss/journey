import Image from 'next/image'
import Link from 'next/link'
import { Balancer } from 'react-wrap-balancer'

import { notoSerif } from '@/config/fonts'
import { cn, getFormattedDate, readTimeCount } from '@/lib/utils'
import { AllTypes as Post } from 'contentlayer/generated'

export default function PostCard(props: Readonly<{ post: Post }>) {
	const { post } = props
	return (
		<Link href={post.url} className="block w-full">
			<div
				className={cn(
					'group relative mb-5 aspect-4/3 w-full overflow-hidden',
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
						'aspect-4/3 w-full object-cover brightness-95 transition-all duration-300',
						'dark:brightness-50',
						'group-hover:scale-110 group-hover:brightness-75',
						'dark:group-hover:brightness-90',
					)}
				/>
			</div>
			<div className="px-6 text-center md:px-0 md:text-left">
				<h1
					className={cn(
						notoSerif.className,
						'mb-3 text-lg font-semibold',
						'md:text-2xl',
					)}
				>
					{post.title}
				</h1>
				<p
					className={cn(
						'text-sm opacity-70',
						'md:mt-2 md:text-sm',
						'lg:mt-6',
					)}
				>
					<Balancer>{post.description}</Balancer>
				</p>
				<div className="mt-2 space-x-1 text-xs opacity-60 md:mt-4">
					<span>{getFormattedDate(post.publishedAt)}</span>
					<span>&mdash;</span>
					<span>{readTimeCount(post.body.raw)} min read</span>
				</div>
			</div>
		</Link>
	)
}
