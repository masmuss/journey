/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.SITE_URL || 'https://journey.khoirul.me',
	generateRobotsTxt: true,
	generateIndexSitemap: false,
}
