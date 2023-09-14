'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Roboto_Slab, Merriweather } from 'next/font/google'
import getFormattedDate from '@/lib/getFormattedDate'

const merriweather = Merriweather({
	subsets: ['latin'],
	weight: ['400', '700'],
})

export default function WritingList(props: {
	writings: any
	className: string
}) {
	const { writings } = props
	return (
		<div className={cn(props.className, 'divide-y')}>
			{writings?.map((writing: any) => {
				return <WritingListItem writing={writing} key={writing.title} />
			})}
		</div>
	)
}

function WritingListItem(props: { writing: any }) {
	const { writing } = props
	return (
		<Link
			href={`/${writing.slug}`}
			className="group block py-6 transition-colors duration-150 md:px-4"
		>
			<div className="mb-4">
				<h1
					className={cn(
						merriweather.className,
						'mb-1 text-2xl font-semibold tracking-wide text-zinc-800',
						'group-hover:text-cyan-600',
						'dark:text-zinc-200',
					)}
				>
					{writing.title}
				</h1>
				<h3
					className={cn(
						'text-base text-gray-500',
						'group-hover:text-cyan-600',
						'dark:text-zinc-400',
					)}
				>
					{writing.description}
				</h3>
			</div>
			<p
				className={cn(
					'text-sm text-gray-500',
					'group-hover:text-cyan-600',
				)}
			>
				{getFormattedDate(writing.publishedAt)}
			</p>
		</Link>
	)
}
