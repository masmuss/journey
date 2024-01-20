import { ReactNode } from 'react'

import { notoSerif } from '@/config/fonts'
import { cn } from '@/lib/utils'

type PostHeaderProps = {
	children: ReactNode
}

export default function PostHeader(props: Readonly<PostHeaderProps>) {
	const { children } = props

	return (
		<div className="">
			<h1
				className={cn(
					notoSerif.className,
					'mb-12 text-center text-4xl font-bold leading-tight md:text-left md:text-6xl md:leading-none lg:text-7xl',
				)}
			>
				{children}
			</h1>
		</div>
	)
}
