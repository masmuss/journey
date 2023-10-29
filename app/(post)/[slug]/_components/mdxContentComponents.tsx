import Link from 'next/link'

import { montserrat } from '@/config/font'
import { cn } from '@/lib/utils'

function a({ href, children }: React.HTMLProps<HTMLAnchorElement>) {
	if (href?.startsWith('/')) {
		return (
			<Link
				href={href}
				className="text-blue-500 hover:text-blue-400 dark:hover:text-blue-700"
			>
				{children}
			</Link>
		)
	}

	if (href?.startsWith('#')) {
		return (
			<a
				href={href}
				className="text-blue-500 hover:text-blue-400 dark:hover:text-blue-700"
			>
				{children}
			</a>
		)
	}

	return (
		<a
			href={href}
			className="text-blue-500 hover:text-blue-400 dark:hover:text-blue-700"
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	)
}

function p({ children }: React.HTMLProps<HTMLParagraphElement>) {
	return <p className="mb-6">{children}</p>
}

function h1({ children }: React.HTMLProps<HTMLHeadingElement>) {
	return (
		<h1 className={cn(montserrat.className, 'text-2xl font-semibold')}>
			{children}
		</h1>
	)
}

function h2({ children }: React.HTMLProps<HTMLHeadingElement>) {
	return (
		<h2 className={cn(montserrat.className, 'text-xl font-semibold')}>
			{children}
		</h2>
	)
}

function blockquote({ children }: React.HTMLProps<HTMLQuoteElement>) {
	return (
		<blockquote
			className={cn(
				'rounded-md bg-zinc-200 px-4 pb-px pt-4 text-lg font-medium italic leading-relaxed dark:border-zinc-500 dark:bg-zinc-900 md:px-6 md:py-px md:pt-6 md:text-xl',
			)}
		>
			<svg
				className="mb-3 h-8 w-8 text-gray-400 dark:text-gray-600"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 18 14"
			>
				<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
			</svg>
			{children}
		</blockquote>
	)
}

const mdxContentComponents = {
	h1,
	h2,
	a,
	p,
	blockquote,
}

export default mdxContentComponents
