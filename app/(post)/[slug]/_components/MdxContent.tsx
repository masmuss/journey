/* eslint-disable import/order */
'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import * as mdxContentComponents from './mdxContentComponents'

import { cn } from '@/lib/utils'

export function MdxContent({ code }: Readonly<{ code: string }>) {
	const Component = useMDXComponent(code)

	return (
		<article
			className={cn(
				'prose-sm prose-gray mx-auto mb-10 max-w-2xl py-10',
				'md:prose-lg',
				'dark:text-zinc-200',
			)}
		>
			<Component components={{ Image, ...mdxContentComponents }} />
		</article>
	)
}
