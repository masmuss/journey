/* eslint-disable @typescript-eslint/no-var-requires */
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

const withMDX = createMDX({
	extension: /\.mdx?$/,
	options: {
		providerImportSource: '@mdx-js/react',
		remarkPlugins: [remarkGfm],
		rehypePlugins: [],
	},
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'unsplash.com',
				port: '',
				pathname: '/**',
			},
		],
	},
}

export default withMDX(nextConfig)
