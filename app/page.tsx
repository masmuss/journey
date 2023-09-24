import { Montserrat } from 'next/font/google'

import { getAllPostsMeta } from '@/lib/mdx'
import { cn } from '@/lib/utils'
import WritingList from '@/views/home/WritingList'

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '700', '800'],
})

export default async function Home() {
	const writings = await getAllPostsMeta()

	return (
		<>
			<main className="w-full">
				<header
					className={cn(
						montserrat.className,
						'mx-auto max-w-4xl px-6 py-20 text-3xl font-bold text-zinc-800',
						'dark:text-zinc-200',
						'md:text-4xl',
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
					className="relative mx-auto mb-28 max-w-4xl px-6 md:px-0"
				/>
			</main>
		</>
	)
}
