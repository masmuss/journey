import type { Metadata } from 'next'
import { Hind } from 'next/font/google'
import './globals.css'

import Footer from '@/components/partials/footer'
import Navbar from '@/components/partials/navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

import { LayoutProvider } from './LayoutProvider'

const hind = Hind({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
	metadataBase: new URL('https://journey.khoirul.me'),
	title: 'A Journey',
	description:
		'Sebuah tempat, dimana sedikit ringkasan perjalanan penulis berada, dan akan tetap abadi, semoga.',
	abstract:
		'Sebuah tempat, dimana sedikit ringkasan perjalanan penulis berada, dan akan tetap abadi, semoga.',
	openGraph: {
		type: 'website',
		images: [
			{
				url: '/og-image.jpg',
				alt: 'A Journey',
				hostname: 'journey.khoirul.me',
			},
		],
	},
	twitter: {
		title: 'A Journey',
		card: 'summary_large_image',
		creator: '@khoirul',
		description:
			'Sebuah tempat, dimana sedikit ringkasan perjalanan penulis berada, dan akan tetap abadi, semoga.',
		images: [
			{
				url: '/og-image.jpg',
				alt: 'A Journey',
				hostname: 'journey.khoirul.me',
			},
		],
	},
	viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="id" className="h-full">
			<body className={cn(hind.className, 'relative scroll-smooth')}>
				<LayoutProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						themes={['light', 'dark', 'system']}
					>
						<Navbar />
						{children}
						<Footer />
					</ThemeProvider>
				</LayoutProvider>
			</body>
		</html>
	)
}
