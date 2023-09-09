import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

const rootDirectory = path.join(process.cwd(), '.', 'content')

export const getPostBySlug = async (slug: string) => {
	const realSlug = slug.replace(/\.mdx$/, '')
	const filePath = path.join(rootDirectory, `${realSlug}.mdx`)

	const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

	const { frontmatter, content } = await compileMDX({
		source: fileContent,
		options: { parseFrontmatter: true },
	})

	return {
		meta: {
			slug: realSlug,
			title: frontmatter.title,
			description: frontmatter.description,
			publishedAt: frontmatter.publishedAt,
		},
		content,
	}
}

export const getAllPostsMeta = async () => {
	const files = fs.readdirSync(rootDirectory)

	let posts = []

	for (const file of files) {
		const { meta }: { meta: any } = await getPostBySlug(file)

		meta.publishedAt = new Date(meta.publishedAt)

		posts.push(meta)
	}

	posts.sort(
		(a: any, b: any) => new Date(b.publishedAt) - new Date(a.publishedAt),
	)

	return posts
}
