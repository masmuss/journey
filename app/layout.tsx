// eslint-disable-next-line import/order
import type { Metadata } from 'next'
import './globals.css'

import { Provider as WrapBalancerProvider } from 'react-wrap-balancer'

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
}: Readonly<{
	children: React.ReactNode
}>) {
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
