'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'

type WritingType = {
	body: string
	id: number
	title: string
	userId: number
}

export default function WritingList(props: {
	writings: WritingType[]
	className: string
}) {
	const { writings } = props
	return (
		<div className={cn(props.className)}>
			{writings.map((writing: WritingType) => {
				return <WritingListItem writing={writing} key={writing.id} />
			})}
		</div>
	)
}

function WritingListItem(props: { writing: WritingType }) {
	const { writing } = props
	return (
		<Link
			href={`/writing/${writing.id}`}
			className="mb-4 block rounded-md border px-4 py-3"
		>
			<h1>{writing.title}</h1>
		</Link>
	)
}
