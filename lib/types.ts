import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export type ContentType = {
	title: string
	slug: string
	images: string | StaticImport
	description: string
	publishedAt: string
}
