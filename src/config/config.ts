export interface CoreConfig {
	title: string
	author: string
	headerTitle: string
	description: string
	language: string
	/** light and dark */
	theme: 'system' | 'dark' | 'light'
	siteUrl: string
	twitter: string
	locale: string
}

export type SiteConfig = Record<string, unknown> & CoreConfig
