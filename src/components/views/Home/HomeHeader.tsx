import { Balancer } from 'react-wrap-balancer'

import { notoSans, notoSerif } from '@/config/fonts'
import siteMetadata from '@/config/site-metadata'
import { cn } from '@/lib/utils'

export default function HomeHeader() {
	return (
		<header
			className={cn(
				notoSerif.className,
				'mx-auto max-w-3xl px-6 py-20 text-center text-zinc-800',
				'lg:max-w-4xl',
				'dark:text-zinc-200',
			)}
		>
			<h1
				className={cn(
					'text-3xl font-semibold',
					'md:text-4xl md:leading-normal',
					'lg:text-5xl',
				)}
			>
				<Balancer>{siteMetadata.headerTitle}</Balancer>
			</h1>
			<h2 className={cn(notoSans.className, 'mt-4')}>
				<Balancer>{siteMetadata.description}</Balancer>
				<span className="mt-6 block text-xs font-normal italic">
					&mdash; Rumah Kaca (1988), Pramoedya Ananta Toer
				</span>
			</h2>
		</header>
	)
}
