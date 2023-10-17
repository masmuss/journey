import Image from 'next/image'
import { ReactElement } from 'react'

import SocialMediaShareButtons from '@/components/partials/SocialMediaShareButtons'
import { montserrat } from '@/config/font'
import getFormattedDate from '@/lib/getFormattedDate'
import { getPostBySlug } from '@/lib/mdx'
import { cn } from '@/lib/utils'

type Metadata = {
	title: string
	slug: string
	description: string
	publishedAt: string
	images: string
}

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
	return {
		title: `${meta.title} | Journey`,
		description: meta.description,
		openGraph: {
			title: meta.title,
			description: meta.description,
			images: meta.images ? [meta.images] : [],
		},
		twitter: {
			title: meta.title,
			description: meta.description,
			images: meta.images ? [meta.images] : [],
		},
	}
}

export default async function Page({ params }: { params: { slug: string } }) {
	const {
		content,
		meta,
	}: {
		content: ReactElement | string | null
		meta: Metadata
	} = await getPageContent(params.slug)

	return (
		<div className="mx-auto flex max-w-3xl items-start justify-evenly gap-8 py-16">
			<SocialMediaShareButtons
				className="hidden md:sticky md:top-24 md:mt-24 md:block md:w-64 md:flex-col"
				slug={params.slug}
				description={meta.description}
			/>
			<div className="mx-auto max-w-2xl px-10 md:px-0">
				<div className="mb-2">
					<h1
						className={cn(
							montserrat.className,
							'mb-2 text-3xl font-bold',
							'md:text-4xl',
						)}
					>
						{meta.title}
					</h1>
					<p className="mb-4 text-gray-500">
						{getFormattedDate(meta.publishedAt)}
					</p>
					<Image
						src={meta.images}
						alt={meta.title}
						width={500}
						height={500}
						quality={95}
						className="h-auto w-full dark:brightness-75"
					/>
				</div>
				<SocialMediaShareButtons
					className="mt-2 flex flex-row items-center md:hidden"
					slug={params.slug}
					description={meta.description}
				/>
				<article
					className={cn(
						'prose-lg prose-gray mx-auto mb-10 py-10',
						'prose-blockquote:border-l-2 prose-blockquote:border-zinc-700 prose-blockquote:font-serif prose-blockquote:text-xl prose-blockquote:font-semibold prose-blockquote:italic md:prose-blockquote:text-2xl md:prose-blockquote:leading-relaxed',
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
