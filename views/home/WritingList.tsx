'use client'

import { Merriweather } from 'next/font/google'
import Link from 'next/link'

import getFormattedDate from '@/lib/getFormattedDate'
import { cn } from '@/lib/utils'

type ContentType = {
	title?: string
	slug: string
	description?: string
	publishedAt?: string
}

const merriweather = Merriweather({
	subsets: ['latin'],
	weight: ['400', '700'],
})

export default function WritingList(props: {
	writings: ContentType[]
	className: string
}) {
	const { writings } = props
	return (
		<div className={cn(props.className, 'divide-y')}>
			{writings?.map((writing: ContentType) => {
				return <WritingListItem writing={writing} key={writing.title} />
			})}
		</div>
	)
}

function WritingListItem(props: { writing: ContentType }) {
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
						'mb-1 text-xl font-semibold tracking-wide text-zinc-800',
						'group-hover:text-cyan-600',
						'dark:text-zinc-200',
					)}
				>
					{writing.title}
				</h1>
				<h3
					className={cn(
						'text-sm text-gray-500',
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
				{getFormattedDate(writing.publishedAt as string)}
			</p>
		</Link>
	)
}
