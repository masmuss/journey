import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ReactElement } from 'react'
import Balancer from 'react-wrap-balancer'

import SocialMediaShareButtons from '@/components/partials/SocialMediaShareButtons'
import { montserrat } from '@/config/font'
import { cn, getFormattedDate, readTimeCount } from '@/lib/utils'
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
			images: [post.images ? post.images : ''],
		},
		twitter: {
			title: post.title,
			description: post.description,
			images: [post.images ? post.images : ''],
		},
	}
}

export default async function PostPage({
	params,
}: Readonly<PostPageProps>): Promise<ReactElement> {
	const post = allPosts.find(
		(post) => post._raw.flattenedPath === params.slug,
	)
	if (!post) notFound()

	return (
		<div className="mx-auto flex max-w-4xl items-start justify-evenly gap-8 py-16">
			<div className="mx-auto max-w-4xl px-6">
				<div className="md:mb-2 md:text-center">
					<h1
						className={cn(
							montserrat.className,
							'mb-px text-2xl font-bold',
							'md:mb-2 md:text-3xl',
							'lg:text-4xl',
						)}
					>
						{post.title}
					</h1>
					<div className="block space-x-2 text-sm text-zinc-600 dark:text-gray-400 md:text-base">
						<time dateTime={post.publishedAt}>
							{getFormattedDate(post.publishedAt)}
						</time>
						<span>&mdash;</span>
						<span>{readTimeCount(post.body.raw)} min read</span>
					</div>
				</div>
				<SocialMediaShareButtons
					className="mt-4 flex flex-row items-center md:mt-4 md:justify-center"
					slug={params.slug}
					description={post.description}
				/>
				<article className="md:mt-8">
					<Balancer>
						<MdxContent code={post.body.code} />
					</Balancer>
				</article>
			</div>
		</div>
	)
}
