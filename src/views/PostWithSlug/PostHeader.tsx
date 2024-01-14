import { Calendar, Clock } from 'lucide-react'

import { notoSerif } from '@/config/fonts'
import { cn, getFormattedDate, readTimeCount } from '@/lib/utils'

type PostHeaderProps = {
	publishedAt: string
	postBodyRaw: string
	postTitle: string
}

export default function PostHeader(props: Readonly<PostHeaderProps>) {
	const { publishedAt, postBodyRaw, postTitle } = props

	return (
		<div className="mb-8 px-6 md:m-2">
			<PostMeta publishedAt={publishedAt} postBodyRaw={postBodyRaw} />
			<h1
				className={cn(
					notoSerif.className,
					'mt-6 text-center text-3xl font-bold tracking-tight text-zinc-800',
					'md:mb-2 md:text-3xl',
					'lg:text-4xl',
					'dark:text-zinc-100',
				)}
			>
				{postTitle}
			</h1>
		</div>
	)
}

function PostMeta({
	publishedAt,
	postBodyRaw,
}: Readonly<{
	publishedAt: string
	postBodyRaw: string
}>) {
	return (
		<div className="flex items-center justify-center gap-8">
			<div className="flex items-center gap-2">
				<Calendar className="box-border h-4 w-4" />
				<time dateTime={publishedAt} className="-mb-px text-xs">
					{getFormattedDate(publishedAt)}
				</time>
			</div>
			<div className="flex items-center gap-2">
				<Clock className="box-border h-4 w-4" />
				<span className="-mb-px text-xs">
					{readTimeCount(postBodyRaw)} min read
				</span>
			</div>
		</div>
	)
}
