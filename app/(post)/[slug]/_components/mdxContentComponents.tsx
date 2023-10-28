import { Noto_Serif_Georgian } from 'next/font/google'
import Link from 'next/link'

import { cn } from '@/lib/utils'

const georgia = Noto_Serif_Georgian({
	weight: '400',
	subsets: ['latin', 'georgian'],
	variable: '--font-georgia',
})

function a({ href, children }: React.HTMLProps<HTMLAnchorElement>) {
	if (href?.startsWith('/')) {
		return (
			<Link href={href} className="prose-a:text-blue-500">
				{children}
			</Link>
		)
	}

	if (href?.startsWith('#')) {
		return (
			<a href={href} className="prose-a:text-blue-500">
				{children}
			</a>
		)
	}

	return (
		<a
			href={href}
			className="prose-a:text-blue-500"
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	)
}

function p({ children }: React.HTMLProps<HTMLParagraphElement>) {
	return <p className="my-4">{children}</p>
}

function blockquote({ children }: React.HTMLProps<HTMLQuoteElement>) {
	return (
		<blockquote className={cn(georgia.className, 'border-l-2 italic')}>
			{children}
		</blockquote>
	)
}

const mdxContentComponents = {
	a,
	p,
	blockquote,
}

export default mdxContentComponents
