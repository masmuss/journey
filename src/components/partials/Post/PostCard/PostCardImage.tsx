import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

import { cn } from '@/lib/utils'

type PostCardImageProps = {
	title: string
	src: string | StaticImport
	width?: number
	height?: number
	className?: string
}

export default function PostCardImage(props: Readonly<PostCardImageProps>) {
	const { title, src, width = 500, height = 300, className } = props

	return (
		<Image
			alt={title}
			src={src}
			width={width}
			height={height}
			decoding="async"
			loading="lazy"
			className={cn(
				'aspect-4/3 w-full object-cover brightness-95 transition-all duration-300',
				'dark:brightness-70',
				'group-hover:scale-110 group-hover:brightness-75',
				'dark:group-hover:brightness-90',
				className,
			)}
		/>
	)
}
