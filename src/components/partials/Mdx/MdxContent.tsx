/* eslint-disable import/order */
'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import * as mdxContentComponents from './mdxContentComponents'

import { cn, getFormattedDate } from '@/lib/utils'

type MdxContentProps = {
	code: string
	title: string
	publishDate: string
}

export function MdxContent({
	code,
	title,
	publishDate,
}: Readonly<MdxContentProps>) {
	const Component = useMDXComponent(code)

	function copyListener(event: ClipboardEvent) {
		const pageLink = `This article was published in ${
			document.location.host
		} at ${getFormattedDate(
			publishDate,
		)} with the title "${title}". Click to read: ${document.location.href}.`

		event.clipboardData!.setData(
			'text/plain',
			`${document.getSelection()}\n\n${pageLink}`,
		)
		event.preventDefault()
	}

	document.addEventListener('copy', copyListener)

	return (
		<article
			className={cn(
				'prose-base prose-zinc mx-auto mb-10 max-w-2xl pt-8',
				'md:py-10',
				'dark:text-zinc-200',
			)}
		>
			<Component components={{ Image, ...mdxContentComponents }} />
		</article>
	)
}
