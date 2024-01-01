/* eslint-disable import/order */
'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import * as mdxContentComponents from './mdxContentComponents'

import { cn } from '@/lib/utils'

export function MdxContent({ code }: Readonly<{ code: string }>) {
	const Component = useMDXComponent(code)

	function copyListener(event: ClipboardEvent) {
		const range = window.getSelection()!.getRangeAt(0),
			rangeContents = range.cloneContents(),
			pageLink = `Read more at: ${document.location.href}`,
			helper = document.createElement('div')

		helper.appendChild(rangeContents)

		event.clipboardData!.setData(
			'text/plain',
			`${helper.innerText}\n${pageLink}`,
		)
		event.clipboardData!.setData(
			'text/html',
			`${helper.innerHTML}<br>${pageLink}`,
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
