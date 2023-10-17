import fs from 'fs'
import path from 'path'

import { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'

type ContentType = Metadata & {
	meta: {
		slug: string
		title: string
		description: string
		publishedAt: string
		images: string
	}
	content: React.ReactElement
}

const rootDirectory = path.join(process.cwd(), '.', 'content')

export const getPostBySlug = async (slug: string): Promise<ContentType> => {
	const realSlug = slug.replace(/\.mdx$/, '')
	const filePath = path.join(rootDirectory, `${realSlug}.mdx`)

	if (!fs.existsSync(filePath)) return redirect(notFound())

	const fileContent: string = fs.readFileSync(filePath, { encoding: 'utf8' })

	const { frontmatter, content } = await compileMDX({
		source: fileContent,
		options: {
			parseFrontmatter: true,
			scope: { slug: realSlug },
			mdxOptions: { remarkPlugins: [], rehypePlugins: [] },
		},
	})

	return {
		meta: {
			slug: realSlug,
			title: frontmatter.title as string,
			description: frontmatter.description as string,
			publishedAt: frontmatter.publishedAt as string,
			images: frontmatter.images as string,
		},
		content,
	}
}

export const getAllPostsMeta = async () => {
	const files = fs.readdirSync(rootDirectory)

	const posts = []

	for (const file of files) {
		const {
			meta,
		}: {
			meta: {
				slug: string
				title: string
				description: string
				publishedAt: string
				images: string
			}
		} = await getPostBySlug(file)
		posts.push(meta)
	}

	posts.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
	return posts
}
