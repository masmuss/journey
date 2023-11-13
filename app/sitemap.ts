import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://journey.khoirul.me/',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
	]
}
