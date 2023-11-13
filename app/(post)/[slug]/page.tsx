import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ReactElement } from 'react'
import { Balancer } from 'react-wrap-balancer'

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
			images: post.images,
		},
		twitter: {
			title: post.title,
			description: post.description,
			images: post.images,
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
				<div className="mb-4 block space-x-2 border-l-4 pl-3 text-sm text-zinc-600 dark:text-gray-400 md:text-base">
					<time dateTime={post.publishedAt}>
						{getFormattedDate(post.publishedAt)}
					</time>
					<span>&mdash;</span>
					<span>{readTimeCount(post.body.raw)} min read</span>
				</div>
				<Image
					src={post.images}
					alt={post.title}
					width={500}
					height={300}
					decoding="async"
					loading="lazy"
					className="h-full w-full scale-100 rounded-lg bg-zinc-300 object-cover blur-0 transition duration-500 dark:bg-zinc-700"
				/>
				<div className="my-4 md:m-2 md:text-center">
					<h1
						className={cn(
							montserrat.className,
							'mt-6 text-4xl font-bold tracking-tight text-zinc-800',
							'md:mb-2 md:text-3xl',
							'lg:text-4xl',
							'dark:text-zinc-100',
						)}
					>
						{post.title}
					</h1>
				</div>
				<article className="md:mt-8">
					<Balancer>
						<MdxContent code={post.body.code} />
					</Balancer>
				</article>
				<div className="flex gap-2">
					<span>Share :</span>
					<SocialMediaShareButtons
						className="flex gap-3"
						slug={params.slug}
						description={post.description}
					/>
				</div>
			</div>
		</div>
	)
}
