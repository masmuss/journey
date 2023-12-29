import { MetadataRoute } from 'next'

import type { Post } from 'contentlayer/generated'
import { allPosts } from 'contentlayer/generated'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl: string = 'https://journey.khoirul.me'

	const posts: Post[] = allPosts
	const postUrls: MetadataRoute.Sitemap = posts?.map((post: Post) => {
		return {
			url: `${baseUrl}/${post._raw.flattenedPath}`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		}
	})

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
		},
		...postUrls,
	]
}
