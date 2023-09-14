import { getPostBySlug } from '@/lib/mdx'
import { JSXElementConstructor, ReactElement } from 'react'
import { Merriweather } from 'next/font/google'
import { cn } from '@/lib/utils'
import getFormattedDate from '@/lib/getFormattedDate'
import { Metadata } from 'next'

const merriweather = Merriweather({
	subsets: ['latin'],
	weight: ['400', '700', '900'],
})

const getPageContent = async (slug: string) => {
	const { meta, content } = await getPostBySlug(slug)
	return { meta, content }
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string }
}) {
	const { meta } = await getPageContent(params.slug)
	return { ...meta }
}

export default async function Page({ params }: { params: { slug: string } }) {
	const {
		content,
		meta,
	}: {
		content: ReactElement<any, string | JSXElementConstructor<any>>
		meta: any
	} = await getPageContent(params.slug)

	return (
		<div className="mx-auto max-w-2xl px-10 py-16 md:px-0">
			<div className="mb-2">
				<h1
					className={cn(
						merriweather.className,
						'mb-2 text-3xl font-bold',
						'md:text-4xl',
					)}
				>
					{meta.title}
				</h1>
				<p className="text-gray-500">
					{getFormattedDate(meta.publishedAt)}
				</p>
			</div>
			<article
				className={cn(
					'prose-lg prose-gray mx-auto mb-10 py-4',
					' prose-blockquote:border-l-2 prose-blockquote:border-zinc-700 prose-blockquote:font-serif prose-blockquote:text-xl prose-blockquote:font-semibold prose-blockquote:italic md:prose-blockquote:text-2xl md:prose-blockquote:leading-relaxed',
					'md:prose-xl',
					'dark:text-zinc-200',
				)}
			>
				{content}
			</article>
		</div>
	)
}
