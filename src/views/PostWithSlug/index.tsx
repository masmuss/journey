import Image from 'next/image'
import { Balancer } from 'react-wrap-balancer'

import { MdxContent } from '@/components/partials/Post/Mdx/MdxContent'
import SocialMediaShareButtons from '@/components/partials/SocialMediaShare/SocialMediaShareButtons'
import { notoSerif } from '@/config/fonts'
import { cn } from '@/lib/utils'
import { AllTypes as Post } from 'contentlayer/generated'

import PostHeader from './PostHeader'

type PostpageProps = {
	post: Post
	params: { slug: string }
}

export default async function PostWithSlugView(props: Readonly<PostpageProps>) {
	const { post, params } = props

	return (
		<div className="mx-auto">
			<PostHeader
				publishedAt={post.publishedAt}
				postBodyRaw={post.body.raw}
				postTitle={post.title}
			/>
			<Image
				src={post.images}
				alt={post.title}
				width={500}
				height={300}
				decoding="async"
				loading="lazy"
				className="mt-8 aspect-4/3 w-full bg-zinc-300 object-cover blur-0 transition duration-500 dark:bg-zinc-700 lg:aspect-video"
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
			<div className="flex w-full flex-col items-center justify-center gap-4 px-6">
				<span
					className={cn(notoSerif.className, 'text-xl font-semibold')}
				>
					Share This:
				</span>
				<SocialMediaShareButtons
					className="flex gap-3"
					slug={params.slug}
					description={post.description}
				/>
			</div>
		</div>
	)
}
