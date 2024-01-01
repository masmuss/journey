import { Calendar, Clock } from 'lucide-react'
import Image from 'next/image'
import { Balancer } from 'react-wrap-balancer'

import { MdxContent } from '@/components/partials/Mdx/MdxContent'
import { notoSerif } from '@/config/fonts'
import { cn, getFormattedDate, readTimeCount } from '@/lib/utils'
import { AllTypes as Post } from 'contentlayer/generated'

type PostpageProps = {
	post: Post
	params: { slug: string }
}

export default async function PostPageContent(props: Readonly<PostpageProps>) {
	const { post } = props

	return (
		<div className="mx-auto">
			<div className="mb-8 px-6 md:m-2">
				<div className="flex items-center justify-center gap-8">
					<div className="flex items-center gap-2">
						<Calendar className="box-border h-4 w-4" />
						<time
							dateTime={post.publishedAt}
							className="-mb-px text-xs"
						>
							{getFormattedDate(post.publishedAt)}
						</time>
					</div>
					<div className="flex items-center gap-2">
						<Clock className="box-border h-4 w-4" />
						<span className="-mb-px text-xs">
							{readTimeCount(post.body.raw)} min read
						</span>
					</div>
				</div>
				<h1
					className={cn(
						notoSerif.className,
						'mt-6 text-center text-3xl font-bold tracking-tight text-zinc-800',
						'md:mb-2 md:text-3xl',
						'lg:text-4xl',
						'dark:text-zinc-100',
					)}
				>
					{post.title}
				</h1>
			</div>
			<Image
				src={post.images}
				alt={post.title}
				width={500}
				height={300}
				decoding="async"
				loading="lazy"
				className="mt-8 aspect-4/3 w-full bg-zinc-300 object-cover blur-0 transition duration-500 dark:bg-zinc-700"
			/>
			<div className="max-w-4xl px-6 md:mt-2">
				<Balancer>
					<MdxContent
						title={post.title}
						publishDate={post.publishedAt}
						code={post.body.code}
					/>
				</Balancer>
			</div>
			{/* <div className="flex gap-2 px-6">
				<span>Share :</span>
				<SocialMediaShareButtons
					className="flex gap-3"
					slug={params.slug}
					description={post.description}
				/>
			</div> */}
		</div>
	)
}
