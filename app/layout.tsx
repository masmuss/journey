import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

import { LayoutProvider } from './LayoutProvider'
import Footer from '../components/partials/footer'
import Navbar from '../components/partials/navbar'

const lato = Lato({
	subsets: ['latin'],
	weight: ['400', '700'],
})

export const metadata: Metadata = {
	title: 'A Journey',
	description: 'Karena hidup adalah sebuah perjalanan.',
	abstract:
		'Sebuah tempat, dimana sedikit ringkasan perjalanan penulis berada, dan akan tetap abadi, semoga.',
	openGraph: {
		type: 'website',
		images: [
			{
				url: 'https://journey.khoirul.me/og-image.jpg',
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
			<body className={cn(lato.className, 'relative scroll-smooth')}>
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
