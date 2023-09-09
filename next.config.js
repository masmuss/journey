const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		providerImportSource: '@mdx-js/react',
		remarkPlugins: [],
		rehypePlugins: [],
	},
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	experimental: {
		mdxRs: true,
	},
}

module.exports = withMDX(nextConfig)
