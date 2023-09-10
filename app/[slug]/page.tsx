import { getPostBySlug } from '@/lib/mdx'
import { JSXElementConstructor, ReactElement } from 'react'
import { Merriweather } from 'next/font/google'
import { cn } from '@/lib/utils'
import getFormattedDate from '@/lib/getFormattedDate'

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
	return { title: meta.title }
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
						'mb-2 text-2xl font-bold',
						'md:text-3xl',
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
					'prose-base prose-gray mx-auto mb-10 py-4',
					'prose-blockquote:border-l-4 prose-blockquote:italic',
					'md:prose-lg ',
					'dark:text-gray-200',
				)}
			>
				{content}
			</article>
		</div>
	)
}
