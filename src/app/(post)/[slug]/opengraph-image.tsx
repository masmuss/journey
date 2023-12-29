/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server'

import { allPosts } from 'contentlayer/generated'

export const alt = 'OpenGraph Image'
export const size = {
	width: 1200,
	height: 630,
}

export const contentType = 'image/jpeg'

export default async function Image({ params }: { params: { slug: string } }) {
	const post = allPosts.find(
		(post) => post._raw.flattenedPath === params.slug,
	)

	return new ImageResponse(
		(
			<div className="relative flex h-full w-full items-center justify-center">
				<img src={post?.images} alt={post?.title} />
			</div>
		),
		size,
	)
}
