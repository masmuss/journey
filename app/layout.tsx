import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/partials/footer'
import Navbar from '@/components/partials/navbar'
import ScrollToTopButton from '@/components/partials/ScrollToTopButton'
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
			<body
				className={cn(
					hind.className,
					'relative scroll-smooth bg-zinc-200/70 dark:bg-zinc-950',
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					themes={['light', 'dark', 'system']}
				>
					<div className="absolute inset-0 top-0 -z-50 flex h-full justify-center sm:px-8">
						<div className="flex w-full max-w-5xl lg:px-8">
							<div className="w-full bg-zinc-100 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-400/20" />
						</div>
					</div>
					<Navbar />
					{children}
					<Footer />
					<ScrollToTopButton className="fixed bottom-10 right-10 z-50 md:bottom-16 md:right-16" />
				</ThemeProvider>
			</body>
		</html>
	)
}
