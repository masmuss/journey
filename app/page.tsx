import Head from 'next/head'
import WritingList from '@/views/home/WritingList'
import { ModeToggle } from '@/components/mode-toggle'
import Image from 'next/image'
import writings from '@/static/writings'

type WritingType = {
	body: string
	id: number
	title: string
	userId: number
}

export default async function Home() {
	// const writings: WritingType[] = await getData()

	return (
		<>
			<Head>
				<title>A Journey</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="w-full">
				<nav className="mx-auto flex max-w-7xl items-center justify-between px-16 py-8">
					<span className="font-mono text-3xl font-extrabold">
						{'{}'}
					</span>
					<ModeToggle />
				</nav>
				<WritingList
					writings={writings}
					className="mx-auto max-w-3xl"
				/>
			</main>
		</>
	)
}

export async function getData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		cache: 'no-cache',
	})
	const data = await res.json()

	return data
}
