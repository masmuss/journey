import Link from 'next/link'

import { AllTypes } from '@/.contentlayer/generated'
import { cn, getFormattedDate, readTimeCount } from '@/lib/utils'

export default function PostListItem(props: { post: AllTypes }) {
	const { post } = props
	return (
		<Link
			href={post.url}
			className="group relative block py-6 pl-8 transition sm:pl-32 md:py-10"
		>
			<div
				className={cn(
					'absolute -inset-x-6 -z-10 scale-95 rounded-2xl border-blue-200 bg-blue-200/30 opacity-0 transition',
					'md:-inset-x-4 md:-inset-y-px md:border',
					'group-hover:scale-100 group-hover:opacity-100',
					'dark:border-zinc-900 dark:bg-zinc-800 dark:bg-opacity-20',
				)}
			/>
			<div
				className={cn(
					'z-10 mb-1 flex flex-col items-start',
					'before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-zinc-200 before:px-px',
					'group-last:before:hidden',
					'after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-blue-100 after:bg-blue-500/50',
					'sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]',
					'dark:before:bg-zinc-900 dark:after:border-zinc-800',
				)}
			>
				<time
					className={cn(
						'left-0 z-10 mb-3 inline-flex h-6 w-auto translate-y-0.5 items-center justify-center rounded-full bg-blue-100 px-2 py-2 text-xs font-semibold text-blue-600/80 md:w-20',
						'sm:absolute sm:mb-0',
						'dark:bg-zinc-800 dark:text-blue-500/80',
					)}
				>
					{getFormattedDate(post.publishedAt, 'd LLL yyyy')}
				</time>
				<div
					className={cn(
						'z-10 text-xl font-bold text-zinc-900 dark:text-zinc-200',
						'group-hover:text-blue-600/80 dark:group-hover:text-blue-400',
					)}
				>
					{post.title}
				</div>
			</div>
			<div
				className={cn(
					'z-10 tracking-wide text-zinc-500',
					'group-hover:text-blue-600/80',
					'dark:group-hover:text-blue-400',
				)}
			>
				{post.description}
			</div>
			<div className={cn('z-10 mt-4 text-sm text-zinc-500')}>
				{readTimeCount(post.body.raw)} min read
			</div>
		</Link>
	)
}
