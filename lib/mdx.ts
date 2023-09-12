import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound, redirect } from 'next/navigation'

const rootDirectory = path.join(process.cwd(), '.', 'content')

export const getPostBySlug = async (slug: string) => {
	const realSlug = slug.replace(/\.mdx$/, '')
	const filePath = path.join(rootDirectory, `${realSlug}.mdx`)

	if (!fs.existsSync(filePath)) return redirect(notFound())

	const fileContent: string = fs.readFileSync(filePath, { encoding: 'utf8' })

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
		posts.push(meta)
	}

	posts.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
	return posts
}
