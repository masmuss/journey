'use client'

import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import getFormattedDate from '@/lib/getFormattedDate'
import { cn } from '@/lib/utils'

type ContentType = {
	title?: string
	slug: string
	images?: string | string[]
	description?: string
	publishedAt?: string
}

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '700', '800'],
})

export default function WritingList(props: {
	writings: ContentType[]
	className: string
}) {
	const { writings } = props
	return (
		<div
			className={cn(
				props.className,
				'columns-1 [column-fill:_balance]',
				'md:columns-2',
			)}
		>
			{writings?.map((writing: ContentType) => {
				return <WritingListItem writing={writing} key={writing.title} />
			})}
		</div>
	)
}

function WritingListItem(props: { writing: ContentType }) {
	const { writing } = props
	return (
		<Link
			href={`/${writing.slug}`}
			className={cn(
				'group block break-inside-avoid py-6 transition-colors duration-150',
				'md:mb-4 md:px-4',
			)}
		>
			<div className="relative mb-4 w-full">
				{writing.images && (
					<Image
						src={writing.images as string}
						alt={writing.title as string}
						width={500}
						height={500}
						quality={95}
						className={cn(
							'aspect-video w-full object-cover',
							'md:aspect-auto md:h-full',
							'dark:brightness-75',
						)}
					/>
				)}
				<div
					className={cn(
						'absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-black/70 to-transparent',
						'transition-opacity duration-300',
						'group-hover:opacity-50',
					)}
				/>
			</div>
			<div className="mb-4">
				<h3
					className={cn(
						montserrat.className,
						'mb-1 text-center text-2xl font-semibold tracking-wide text-zinc-800',
						'group-hover:text-cyan-600',
						'dark:text-zinc-200',
					)}
				>
					{writing.title}
				</h3>
			</div>
			<p
				className={cn(
					'text-center text-sm text-gray-500',
					'group-hover:text-cyan-600',
				)}
			>
				{getFormattedDate(writing.publishedAt as string)}
			</p>
		</Link>
	)
}
