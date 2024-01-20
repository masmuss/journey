import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ReactElement } from 'react'

import PostPageContent from '@/views/PostWithSlug'
import { allPosts } from 'contentlayer/generated'

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
		<div className="mt-20">
			<div className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight hover:underline md:text-4xl md:tracking-tighter">
				<Link href="/" className="hover:underline">
					A Journey
				</Link>
				.
			</div>
			<PostPageContent params={params} post={post} />
		</div>
	)
}
