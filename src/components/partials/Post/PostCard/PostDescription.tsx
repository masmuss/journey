import { ReactNode } from 'react'
import { Balancer } from 'react-wrap-balancer'

import { cn } from '@/lib/utils'

type PostDescriptionProps = {
	children: ReactNode
	className?: string
}

export default function PostDescription(props: Readonly<PostDescriptionProps>) {
	const { children, className } = props

	return (
		<p className={cn('w-full text-sm opacity-70', 'md:mt-2', className)}>
			<Balancer>{children}</Balancer>
		</p>
	)
}
