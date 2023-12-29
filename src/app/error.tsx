'use client' // Error components must be Client components

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({ error }: { error: Error; reset: () => void }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return (
		<main className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-4 py-1">
			<h2 className="my-4 text-center text-3xl font-bold">
				Whoops! Something went wrong!
			</h2>
			<p className="text-center text-xl">
				<Link href="/" className="">
					go home 🏠
				</Link>
			</p>
		</main>
	)
}
