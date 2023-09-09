'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Roboto_Slab, Merriweather } from 'next/font/google'

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
		<Link href={`/${writing.slug}`} className="block py-6 md:px-4">
			<div className="mb-4">
				<h1
					className={cn(
						merriweather.className,
						'mb-1 text-xl font-semibold tracking-wide text-zinc-800',
						'dark:text-zinc-200',
					)}
				>
					{writing.title}
				</h1>
				<h3>{writing.description}</h3>
			</div>
			<p className="text-sm text-gray-500">{writing.publishedAt}</p>
		</Link>
	)
}
