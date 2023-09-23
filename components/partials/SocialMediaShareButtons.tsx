'use client'
import {
	FacebookIcon,
	FacebookShareButton,
	TwitterIcon,
	TwitterShareButton,
	WhatsappIcon,
	WhatsappShareButton,
	TelegramIcon,
	TelegramShareButton,
	FacebookMessengerIcon,
	FacebookMessengerShareButton,
} from 'next-share'
import React from 'react'

import { cn } from '@/lib/utils'

type SocialMediaShareButtonsProps = {
	className?: string
	slug?: string
	description?: string
}

export default function SocialMediaShareButtons({
	className,
	slug,
	description,
}: SocialMediaShareButtonsProps) {
	const url: string = `https://journey.khoirul.me/${slug}`

	return (
		<div className={cn('flex gap-6', className)}>
			<h3 className="hidden opacity-50 md:block">share</h3>
			<div className="mt-4 flex flex-row gap-2 md:flex-col">
				<FacebookShareButton url={url} quote={description}>
					<FacebookIcon size={32} round />
				</FacebookShareButton>
				<FacebookMessengerShareButton url={url} appId={''}>
					<FacebookMessengerIcon size={32} round />
				</FacebookMessengerShareButton>
				<TelegramShareButton url={url} title={description}>
					<TelegramIcon size={32} round />
				</TelegramShareButton>
				<TwitterShareButton url={url} title={description}>
					<TwitterIcon size={32} round />
				</TwitterShareButton>
				<WhatsappShareButton
					url={url}
					title={description}
					separator=":: "
				>
					<WhatsappIcon size={32} round />
				</WhatsappShareButton>
			</div>
		</div>
	)
}
