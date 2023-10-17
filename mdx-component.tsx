'use client'
import type { MDXComponents } from 'mdx/types'

import { montserrat } from './config/font'

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: ({ children }) => (
			<h1 className={montserrat.className}>{children}</h1>
		),
		h2: ({ children }) => (
			<h2 className={montserrat.className}>{children}</h2>
		),
		blockquote: ({ children }) => (
			<blockquote className="prose-blockquote:border-l-2 prose-blockquote:border-zinc-700 prose-blockquote:font-serif prose-blockquote:text-xl prose-blockquote:font-semibold prose-blockquote:italic md:prose-blockquote:text-2xl md:prose-blockquote:leading-relaxed">
				{children}
			</blockquote>
		),
		...components,
	}
}
