import { cn } from '@/lib/utils'

type PostTagProps = {
	children: React.ReactNode
}

export default function PostTag(props: Readonly<PostTagProps>) {
	const { children } = props
	return (
		<span
			className={cn(
				'inline-flex items-center gap-x-1.5 rounded-lg bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-800 transition-colors',
				'dark:bg-teal-800/30 dark:text-teal-500',
			)}
		>
			{children}
		</span>
	)
}
