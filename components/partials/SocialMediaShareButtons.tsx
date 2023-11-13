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
}: Readonly<SocialMediaShareButtonsProps>) {
	const url: string = `https://journey.khoirul.me/${slug}`
	const iconClassNames: string =
		'h-4 w-4 opacity-40 transition-opacity duration-300 hover:opacity-100 md:h-5 md:w-5'

	return (
		<div className={cn(className)}>
			<FacebookShareButton url={url} quote={description}>
				<FacebookIcon className={iconClassNames} />
			</FacebookShareButton>
			<FacebookMessengerShareButton url={url} appId={''}>
				<MessageCircleIcon className={iconClassNames} />
			</FacebookMessengerShareButton>
			<TelegramShareButton url={url} title={description}>
				<SendIcon className={iconClassNames} />
			</TelegramShareButton>
			<TwitterShareButton url={url} title={description}>
				<TwitterIcon className={iconClassNames} />
			</TwitterShareButton>
			<WhatsappShareButton url={url} title={description} separator=" ">
				<PhoneIcon className={iconClassNames} />
			</WhatsappShareButton>
		</div>
	)
}
