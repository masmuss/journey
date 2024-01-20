import { ReactNode } from 'react'

import { notoSerif } from '@/config/fonts'
import { cn } from '@/lib/utils'

type PostTitleProps = {
	children: ReactNode
	className?: string
}

export default function PostTitle(props: Readonly<PostTitleProps>) {
	const { children, className } = props
	return (
		<h1
			className={cn(
				notoSerif.className,
				'mb-3 font-semibold',
				'group-hover:underline',
				className,
			)}
		>
			{children}
		</h1>
	)
}
