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
import { ClassNameValue } from 'tailwind-merge'

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
	const iconClassNames: ClassNameValue =
		'h-5 w-5 transition-opacity duration-300 hover:opacity-100 text-zinc-600 dark:text-zinc-50'

	return (
		<div className={cn(className)}>
			<FacebookShareButton url={url} quote={description}>
				<div className="rounded-md bg-zinc-300 p-2 opacity-50 duration-300 hover:opacity-100 dark:bg-zinc-700">
					<FacebookIcon className={iconClassNames} />
				</div>
			</FacebookShareButton>
			<FacebookMessengerShareButton url={url} appId={''}>
				<div className="rounded-md bg-zinc-300 p-2 opacity-50 duration-300 hover:opacity-100 dark:bg-zinc-700">
					<MessageCircleIcon className={iconClassNames} />
				</div>
			</FacebookMessengerShareButton>
			<TelegramShareButton url={url} title={description}>
				<div className="rounded-md bg-zinc-300 p-2 opacity-50 duration-300 hover:opacity-100 dark:bg-zinc-700">
					<SendIcon className={iconClassNames} />
				</div>
			</TelegramShareButton>
			<TwitterShareButton url={url} title={description}>
				<div className="rounded-md bg-zinc-300 p-2 opacity-50 duration-300 hover:opacity-100 dark:bg-zinc-700">
					<TwitterIcon className={iconClassNames} />
				</div>
			</TwitterShareButton>
			<WhatsappShareButton url={url} title={description} separator=" ">
				<div className="rounded-md bg-zinc-300 p-2 opacity-50 duration-300 hover:opacity-100 dark:bg-zinc-700">
					<PhoneIcon className={iconClassNames} />
				</div>
			</WhatsappShareButton>
		</div>
	)
}
