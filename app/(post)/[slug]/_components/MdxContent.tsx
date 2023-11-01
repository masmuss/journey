/* eslint-disable import/order */
'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import * as mdxContentComponents from './mdxContentComponents'

import { cn } from '@/lib/utils'

export function MdxContent({ code }: { code: string }) {
	const Component = useMDXComponent(code)

	return (
		<article
			className={cn(
				'prose-lg prose-gray mx-auto mb-10 py-10',
				'md:prose-xl',
				'dark:text-zinc-200',
			)}
		>
			<Component components={{ Image, ...mdxContentComponents }} />
		</article>
	)
}
