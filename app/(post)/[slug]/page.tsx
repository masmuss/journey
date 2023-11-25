import { Calendar, Clock } from 'lucide-react'
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
	try {
		const post = allPosts.find(
			(post) => post._raw.flattenedPath === params.slug,
		)

		if (!post)
			return {
				title: 'Post Not Found',
				description: 'The post you requested does not exist.',
			}

		return {
			title: post.title,
			description: post.description,
			openGraph: {
				title: post.title,
				description: post.description,
			},
			twitter: {
				title: post.title,
				description: post.description,
				images: post.images,
			},
		}
	} catch (error) {
		console.error(error)
		return {
			title: 'Post Not Found',
			description: 'The post you requested does not exist.',
		}
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
		<div className="mx-auto flex w-full items-start gap-8 py-16">
			<div className="mx-auto">
				<div className="mb-8 px-6 md:m-2">
					<div className="flex items-center justify-center gap-8">
						<div className="flex items-center gap-2">
							<Calendar className="box-border h-4 w-4" />
							<time
								dateTime={post.publishedAt}
								className="-mb-px text-xs"
							>
								{getFormattedDate(post.publishedAt)}
							</time>
						</div>
						<div className="flex items-center gap-2">
							<Clock className="box-border h-4 w-4" />
							<span className="-mb-px text-xs">
								{readTimeCount(post.body.raw)} min read
							</span>
						</div>
					</div>
					<h1
						className={cn(
							montserrat.className,
							'mt-6 text-center text-3xl font-bold tracking-tight text-zinc-800',
							'md:mb-2 md:text-3xl',
							'lg:text-4xl',
							'dark:text-zinc-100',
						)}
					>
						{post.title}
					</h1>
				</div>
				<Image
					src={post.images}
					alt={post.title}
					width={500}
					height={300}
					decoding="async"
					loading="lazy"
					className="mt-8 aspect-4/3 w-full bg-zinc-300 object-cover blur-0 transition duration-500 dark:bg-zinc-700"
				/>
				<article className="max-w-4xl px-6 md:mt-2">
					<Balancer>
						<MdxContent code={post.body.code} />
					</Balancer>
				</article>
				<div className="flex gap-2 px-6">
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
