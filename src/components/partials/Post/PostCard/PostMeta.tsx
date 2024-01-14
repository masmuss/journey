import { cn, getFormattedDate, readTimeCount } from '@/lib/utils'

type PostMetaProps = {
	publishedAt: string
	bodyRaw: string
	className?: string
}

export default function PostMeta(props: PostMetaProps) {
	const { publishedAt, bodyRaw, className } = props

	return (
		<div
			className={cn(
				'mt-3 space-x-1 text-xs opacity-50 lg:mt-2',
				className,
			)}
		>
			<span>{getFormattedDate(publishedAt)}</span>
			<span>&mdash;</span>
			<span>{readTimeCount(bodyRaw)} min read</span>
		</div>
	)
}
