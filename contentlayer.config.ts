import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: '**/*.mdx',
	contentType: 'mdx',
	fields: {
		title: { type: 'string', required: true },
		description: { type: 'string', required: true },
		publishedAt: { type: 'date', required: true },
		images: { type: 'string', required: true },
	},
	computedFields: {
		url: {
			type: 'string',
			resolve: (post) => `/${post._raw.flattenedPath}`,
		},
	},
}))

export default makeSource({
	contentDirPath: 'posts',
	documentTypes: [Post],
	mdx: {
		remarkPlugins: [],
	},
})
