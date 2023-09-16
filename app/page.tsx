import { Merriweather } from 'next/font/google'

import { getAllPostsMeta } from '@/lib/mdx'
import { cn } from '@/lib/utils'
import WritingList from '@/views/home/WritingList'

const merriweather = Merriweather({
	subsets: ['latin'],
	weight: ['400', '700'],
})

export default async function Home() {
	const writings = await getAllPostsMeta()

	return (
		<>
			<main className="w-full">
				<header
					className={cn(
						merriweather.className,
						'mx-auto max-w-3xl px-6 py-20 text-3xl font-bold text-zinc-800 md:text-4xl',
						'dark:text-zinc-200',
					)}
				>
					Setiap tulisan merupakan dunia tersendiri, yang
					terapung-apung antara dunia kenyataan dan dunia impian
					<span className="mt-6 block text-sm font-normal italic">
						&mdash; Rumah Kaca (1988), Pramoedya Ananta Toer
					</span>
				</header>
				<WritingList
					writings={writings}
					className="relative mx-auto mb-28 max-w-3xl px-6 md:px-0"
				/>
			</main>
		</>
	)
}
