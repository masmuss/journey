'use client'
import {
	FacebookIcon,
	MessageCircleIcon,
	PhoneIcon,
	SendIcon,
	TwitterIcon,
} from 'lucide-react'
import {
	FacebookMessengerShareButton,
	FacebookShareButton,
	TelegramShareButton,
	TwitterShareButton,
	WhatsappShareButton,
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
		<div
			className={cn(
				'flex items-center gap-6 md:justify-center',
				className,
			)}
		>
			<h3 className="hidden opacity-50 md:block md:text-center">share</h3>
			<div className="mt-6 flex flex-row items-center justify-center gap-4 md:flex-col">
				<FacebookShareButton url={url} quote={description}>
					<FacebookIcon className="h-4 w-4 opacity-60 transition-opacity duration-300 hover:opacity-100 md:h-6 md:w-6" />
				</FacebookShareButton>
				<FacebookMessengerShareButton url={url} appId={''}>
					<MessageCircleIcon className="h-4 w-4 opacity-60 transition-opacity duration-300 hover:opacity-100 md:h-6 md:w-6" />
				</FacebookMessengerShareButton>
				<TelegramShareButton url={url} title={description}>
					<SendIcon className="h-4 w-4 opacity-60 transition-opacity duration-300 hover:opacity-100 md:h-6 md:w-6" />
				</TelegramShareButton>
				<TwitterShareButton url={url} title={description}>
					<TwitterIcon className="h-4 w-4 opacity-60 transition-opacity duration-300 hover:opacity-100 md:h-6 md:w-6" />
				</TwitterShareButton>
				<WhatsappShareButton
					url={url}
					title={description}
					separator=":: "
				>
					<PhoneIcon className="h-4 w-4 opacity-60 transition-opacity duration-300 hover:opacity-100 md:h-6 md:w-6" />
				</WhatsappShareButton>
			</div>
		</div>
	)
}
