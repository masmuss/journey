/* eslint-disable @typescript-eslint/no-explicit-any */
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

	function copyListener(event: any) {
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

	return (
		<article
			className={cn(
				'prose-zinc mb-10 max-w-full pt-8 md:max-w-3xl',
				'md:prose-xl md:py-10',
				'dark:text-zinc-200',
			)}
			onCopy={copyListener}
		>
			<Component components={{ Image, ...mdxContentComponents }} />
		</article>
	)
}
