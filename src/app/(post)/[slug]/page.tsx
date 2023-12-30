import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ReactElement } from 'react'

import PostPageContent from '@/views/Post'
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
		<div className="mx-auto flex w-full items-start gap-8 py-16">
			<PostPageContent params={params} post={post} />
		</div>
	)
}
