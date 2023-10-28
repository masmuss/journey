import { format, parseISO } from 'date-fns'
import Link from 'next/link'

import { AllTypes } from '@/.contentlayer/generated'
import { cn } from '@/lib/utils'

export default function PostListItem(props: { post: AllTypes }) {
	const { post } = props
	return (
		<Link
			href={post.url}
			className="group relative block py-10 pl-8 sm:pl-32"
		>
			<div className="absolute -inset-x-px -inset-y-px -z-10 scale-0 bg-zinc-100 transition dark:bg-zinc-800/20 md:scale-95 md:group-hover:scale-100 md:group-hover:opacity-100" />
			<div
				className={cn(
					'z-10 mb-1 flex flex-col items-start',
					'before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-zinc-300 before:px-px',
					'group-last:before:hidden',
					'after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-zinc-100 after:bg-zinc-600',
					'sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]',
					'dark:before:bg-zinc-900 dark:after:border-zinc-800',
				)}
			>
				<time
					className={cn(
						'left-0 z-10 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-blue-100 px-1 py-2 text-xs font-semibold text-blue-600',
						'sm:absolute sm:mb-0',
						'dark:bg-zinc-800',
					)}
				>
					{format(parseISO(post.publishedAt), 'd LL yyyy')}
				</time>
				<div className="z-10 text-xl font-bold text-zinc-900 dark:text-zinc-200">
					{post.title}
				</div>
			</div>
			<div className="z-10 text-slate-500">{post.description}</div>
		</Link>
	)
}
