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
					'mx-auto max-w-4xl px-6 py-20 text-3xl font-bold text-zinc-800',
					'dark:text-zinc-200',
					'md:text-center md:text-4xl md:leading-normal',
				)}
			>
				Setiap tulisan merupakan dunia tersendiri, yang terapung-apung
				antara dunia kenyataan dan dunia impian
				<span className="mt-6 block text-sm font-normal italic">
					&mdash; Rumah Kaca (1988), Pramoedya Ananta Toer
				</span>
			</header>
			<PostsList
				posts={allPosts}
				className="relative mx-auto mb-28 max-w-xl px-6 md:px-0"
			/>
		</main>
	)
}
