// eslint-disable-next-line import/order
import type { Metadata } from 'next'
import './globals.css'

import { Provider as WrapBalancerProvider } from 'react-wrap-balancer'

import ScrollToTopButton from '@/components/global/ScrollToTopButton'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { notoSans } from '@/config/fonts'
import siteMetadata from '@/config/site-metadata'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
	metadataBase: new URL('https://journey.khoirul.me'),
	title: {
		default: siteMetadata.title,
		template: `%s | ${siteMetadata.title}`,
	},
	description: siteMetadata.description,
	openGraph: {
		type: 'website',
		title: {
			template: `%s | ${siteMetadata.title}`,
			default: siteMetadata.title,
		},
	},
	twitter: {
		card: 'summary_large_image',
		title: {
			template: `%s | ${siteMetadata.title}`,
			default: siteMetadata.title,
		},
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="id" className="h-full">
			<body
				className={cn(
					notoSans.className,
					'relative scroll-smooth bg-zinc-100 dark:bg-zinc-900',
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					themes={['light', 'dark', 'system']}
				>
					<WrapBalancerProvider>
						<Navbar />
						{children}
						<Footer />
						<ScrollToTopButton className="fixed bottom-10 right-10 md:bottom-16 md:right-16" />
					</WrapBalancerProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
