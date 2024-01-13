import Image from 'next/image'
import Link from 'next/link'
import { Balancer } from 'react-wrap-balancer'

import { notoSerif } from '@/config/fonts'
import { cn, getFormattedDate, readTimeCount } from '@/lib/utils'
import { AllTypes as Post } from 'contentlayer/generated'

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

				<div
					className={cn(
						'w-full text-center',
						'xl:col-start-2 xl:text-left',
					)}
				>
					<h1
						className={cn(
							notoSerif.className,
							'mb-3 text-xl font-semibold',
							'md:text-4xl',
							'xl:text-5xl',
						)}
					>
						{post.title}
					</h1>
					<p
						className={cn(
							'px-2 text-sm opacity-70',
							'md:mt-2 md:px-6 md:text-base',
							'xl:mt-8 xl:px-0',
						)}
					>
						<Balancer>{post.description}</Balancer>
					</p>
					<div className="mt-2 space-x-1 text-xs opacity-60 lg:mt-2">
						<span>{getFormattedDate(post.publishedAt)}</span>
						<span>&mdash;</span>
						<span>{readTimeCount(post.body.raw)} min read</span>
					</div>
				</div>
			</div>
		</Link>
	)
}
