import { SiteConfig } from './config'

const siteMetadata: SiteConfig = {
	title: 'A Journey',
	author: 'Rexbocho',
	headerTitle: 'Navigating the Sea of Reflections',
	description:
		'Setiap tulisan merupakan dunia tersendiri, yang terapung-apung antara dunia kenyataan dan dunia impian.',
	language: 'id-ID',
	theme: 'system',
	siteUrl:
		process.env.NODE_ENV === 'production'
			? 'https://journey.khoirul.me'
			: 'http://localhost:3000',
	twitter: 'https://twitter.com/rexbocho',
	locale: 'id-ID',
}

export default siteMetadata
