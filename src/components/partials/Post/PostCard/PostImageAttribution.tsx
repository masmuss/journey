import { cn } from '@/lib/utils'

type PostImageAttributionProps = {
	attribution: string
}

export default function PostImageAttribution({
	attribution,
}: Readonly<PostImageAttributionProps>) {
	return (
		<figcaption
			dangerouslySetInnerHTML={{ __html: attribution }}
			className={cn(
				'prose prose-zinc mx-auto mt-4 max-w-none text-center text-xs italic opacity-70',
				'md:text-sm',
				'lg:text-base',
				'dark:prose-invert',
			)}
		/>
	)
}
