import { Merriweather } from 'next/font/google'
import { ReactElement } from 'react'

import SocialMediaShareButtons from '@/components/partials/SocialMediaShareButtons'
import getFormattedDate from '@/lib/getFormattedDate'
import { getPostBySlug } from '@/lib/mdx'
import { cn } from '@/lib/utils'

type Metadata = {
	title?: string
	slug: string
	description?: string
	publishedAt?: string
}

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
		content: ReactElement
		meta: Metadata
	} = await getPageContent(params.slug)

	return (
		<div className="mx-auto flex max-w-3xl items-start justify-evenly gap-8 py-16">
			<SocialMediaShareButtons
				className="hidden md:sticky md:top-10 md:mt-24 md:block md:w-64 md:flex-col "
				slug={params.slug}
				description={meta.description}
			/>
			<div className="mx-auto max-w-2xl px-10 md:px-0">
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
						{getFormattedDate(meta.publishedAt as string)}
					</p>
				</div>
				<SocialMediaShareButtons
					className="mt-2 flex flex-row items-center md:hidden"
					slug={params.slug}
					description={meta.description}
				/>
				<article
					className={cn(
						'prose-lg prose-gray mx-auto mb-10 py-10',
						' prose-blockquote:border-l-2 prose-blockquote:border-zinc-700 prose-blockquote:font-serif prose-blockquote:text-xl prose-blockquote:font-semibold prose-blockquote:italic md:prose-blockquote:text-2xl md:prose-blockquote:leading-relaxed',
						'md:prose-xl',
						'dark:text-zinc-200',
					)}
				>
					{content}
				</article>
			</div>
		</div>
	)
}
