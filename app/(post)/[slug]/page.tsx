import { format, parseISO } from 'date-fns'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ReactElement } from 'react'

import SocialMediaShareButtons from '@/components/partials/SocialMediaShareButtons'
import { montserrat } from '@/config/font'
import { cn } from '@/lib/utils'
import { allPosts } from 'contentlayer/generated'

import { MdxContent } from './_components/MdxContent'

export type PostPageProps = {
	params: { slug: string }
}

export const generateStaticParams = async () =>
	allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: PostPageProps): Metadata => {
	const post = allPosts.find(
		(post) => post._raw.flattenedPath === params.slug,
	)
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
	return {
		title: post.title,
		description: post.description,
		openGraph: {
			title: post.title,
			description: post.description,
			images: [post.images],
		},
		twitter: {
			title: post.title,
			description: post.description,
			images: [post.images],
		},
	}
}

export default async function WritingPage({
	params,
}: PostPageProps): Promise<ReactElement> {
	const post = allPosts.find(
		(post) => post._raw.flattenedPath === params.slug,
	)
	if (!post) notFound()

	return (
		<div className="mx-auto flex max-w-3xl items-start justify-evenly gap-8 py-16">
			<SocialMediaShareButtons
				className="hidden md:sticky md:top-24 md:mt-24 md:block md:w-64 md:flex-col"
				slug={params.slug}
				description={post.description}
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
						{post.title}
					</h1>
					<time
						dateTime={post.publishedAt}
						className="mb-8 text-gray-500"
					>
						{format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
					</time>
					<Image
						src={post.images}
						alt={post.title}
						width={500}
						height={500}
						quality={95}
						className="mt-4 h-auto w-full dark:brightness-75"
					/>
				</div>
				<SocialMediaShareButtons
					className="mt-2 flex flex-row items-center md:hidden"
					slug={params.slug}
					description={post.description}
				/>
				<MdxContent code={post.body.code} />
			</div>
		</div>
	)
}
