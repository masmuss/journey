'use client'

import { ContentType } from '@/lib/types'
import { cn } from '@/lib/utils'

import WritingListItem from './WritingListItem'

type WritingListPropsType = {
	writings: ContentType[]
	className: string
}

export default function WritingList(props: WritingListPropsType) {
	const { writings } = props
	return (
		<div
			className={cn(
				props.className,
				'columns-1 [column-fill:_balance]',
				'md:columns-2',
			)}
		>
			{writings?.map((writing: ContentType) => {
				return <WritingListItem writing={writing} key={writing.title} />
			})}
		</div>
	)
}
