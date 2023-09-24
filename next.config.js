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
	images: {
		remotePatterns: [
			{
				hostname: 'images.unsplash.com',
				port: '',
				protocol: 'https',
				pathname: '/**',
			},
			{
				hostname: 'unsplash.com',
				port: '',
				protocol: 'https',
				pathname: '/**',
			},
		],
	},
}

module.exports = withMDX(nextConfig)
