'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

type ScrollToTopButtonProps = {
	className?: string
}

export default function ScrollToTopButton(
	props: Readonly<ScrollToTopButtonProps>,
) {
	const [showTopBtn, setShowTopBtn] = useState<boolean>(false)

	const goToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) setShowTopBtn(true)
			else setShowTopBtn(false)
		})
	}, [])

	return (
		<div className={props.className}>
			<Button
				className={cn(
					'border border-zinc-300 bg-zinc-100 px-2 py-2 shadow-md transition-all hover:scale-110 [&>svg]:text-zinc-950',
					showTopBtn
						? 'translate-y-0 opacity-100'
						: 'translate-y-96 opacity-0',
					'dark:border-zinc-700 dark:bg-zinc-800 [&>svg]:dark:text-zinc-100',
				)}
				onClick={goToTop}
			>
				<ArrowUp className="h-5 w-5 opacity-40 transition-opacity duration-300 hover:opacity-100 md:h-6 md:w-6" />
			</Button>
		</div>
	)
}
