import Head from 'next/head'
import WritingList from '@/views/home/WritingList'
import { ModeToggle } from '@/components/mode-toggle'
import { Merriweather, Roboto_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import { getAllPostsMeta } from '@/lib/mdx'

type WritingType = {
	body: string
	id: number
	title: string
	userId: number
}

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
						'mx-auto max-w-3xl px-6 py-20 text-3xl font-bold text-zinc-800',
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
					className="relative mx-auto mb-28 max-w-3xl px-6 md:px-0"
				/>
			</main>
		</>
	)
}
