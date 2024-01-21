/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server'

import siteMetadata from '@/config/site-metadata'
import { getFormattedDate, readTimeCount } from '@/lib/utils'
import { allPosts } from 'contentlayer/generated'

export const alt = 'OpenGraph Image'
export const size = {
	width: 1200,
	height: 630,
}
export const runtime = 'edge'
export const revalidate = 60

export const contentType = 'image/jpeg'

export default async function Image({ params }: { params: { slug: string } }) {
	const notoSans700 = await fetch(
		new URL(
			'../../../../node_modules/@fontsource/noto-sans/files/noto-sans-latin-700-normal.woff',
			import.meta.url,
		),
	).then((res) => res.arrayBuffer())

	const post = allPosts.find(
		(post) => post._raw.flattenedPath === params.slug,
	)

	return new ImageResponse(
		(
			<div
				tw="relative flex h-full"
				style={{
					backgroundImage: `url(${siteMetadata.siteUrl}/og.jpg)`,
				}}
			>
				<div tw="bg-zinc-900 w-full h-full flex flex-col justify-center items-center bg-opacity-60">
					<h1
						tw="m-0 flex max-w-5xl flex-wrap justify-center py-10 px-12 text-center font-sans text-5xl leading-normal text-white md:mx-10"
						style={{ fontFamily: 'Noto Sans' }}
					>
						{post?.title}
					</h1>
					<h3 tw="text-zinc-300 text-2xl max-w-4xl">
						Posted on {getFormattedDate(post!.publishedAt)} &mdash;{' '}
						{readTimeCount(post!.body.raw)} min read
					</h3>
				</div>
			</div>
		),
		{
			width: size.width,
			height: size.height,
			fonts: [
				{
					name: 'Noto Sans',
					data: notoSans700,
				},
			],
		},
	)
}
