import { Balancer } from 'react-wrap-balancer'

import { montserrat } from '@/config/font'
import { cn } from '@/lib/utils'
import { allPosts } from 'contentlayer/generated'

import PostsList from './_components/PostsList'

export default async function Home() {
	return (
		<main className="w-full">
			<header
				className={cn(
					montserrat.className,
					'mx-auto max-w-3xl px-6 py-20 text-2xl font-bold text-zinc-800',
					'dark:text-zinc-200',
					'md:text-center md:text-3xl md:leading-normal',
				)}
			>
				<Balancer>
					Setiap tulisan merupakan dunia tersendiri, yang
					terapung-apung antara dunia kenyataan dan dunia impian
				</Balancer>
				<span className="mt-6 block text-xs font-normal italic">
					&mdash; Rumah Kaca (1988), Pramoedya Ananta Toer
				</span>
			</header>
			<PostsList
				posts={allPosts}
				className={cn(
					'mx-auto mb-32 grid grid-cols-1 gap-8 gap-y-16',
					'md:max-w-2xl md:grid-cols-2',
					'lg:max-w-5xl lg:grid-cols-3',
					'2xl:grid-cols-4',
				)}
			/>
		</main>
	)
}
