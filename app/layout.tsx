import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/partials/footer'
import Navbar from '@/components/partials/navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { hind } from '@/config/font'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
	metadataBase: new URL('https://journey.khoirul.me'),
	title: 'A Journey',
	description:
		'Sebuah tempat, dimana sedikit ringkasan perjalanan penulis berada, dan akan tetap abadi, semoga.',
	abstract:
		'Sebuah tempat, dimana sedikit ringkasan perjalanan penulis berada, dan akan tetap abadi, semoga.',
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
			</body>
		</html>
	)
}
