// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
	// async redirects() {
	// 	return [
	// 		{
	// 			source: '/auth/login',
	// 			destination: '/',
	// 			permanent: true,
	// 		},
	// 	]
	// },
	reactStrictMode: true,
	swcMinify: true,
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
			{
				protocol: 'https',
				hostname: 'assets-global.website-files.com',
				port: '',
				pathname: '/**',
			},
		],
	},
}

module.exports = withContentlayer(nextConfig)
