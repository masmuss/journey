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
				aria-label="Scroll to Top"
				className={cn(
					'rounded-full border border-zinc-300 bg-zinc-200/70 px-2 py-2 shadow-md backdrop-blur-md transition-all duration-500 hover:scale-110 [&>svg]:text-zinc-950',
					showTopBtn
						? 'translate-y-0 opacity-100'
						: 'translate-y-96 opacity-0',
					'dark:border-zinc-700 dark:bg-zinc-950 [&>svg]:dark:text-zinc-100',
				)}
				size="icon"
				onClick={goToTop}
			>
				<ArrowUp className="h-5 w-5 opacity-40 transition-opacity duration-300 hover:opacity-100 md:h-6 md:w-6 lg:w-8" />
			</Button>
		</div>
	)
}
