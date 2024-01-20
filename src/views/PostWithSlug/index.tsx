import { Balancer } from 'react-wrap-balancer'

import { MdxContent } from '@/components/partials/Post/Mdx/MdxContent'
import MoreStories from '@/components/partials/Post/MoreStories'
import PostCardImage from '@/components/partials/Post/PostCard/PostCardImage'
import PostImageAttribution from '@/components/partials/Post/PostCard/PostImageAttribution'
import SocialMediaShareButtons from '@/components/partials/SocialMediaShare/SocialMediaShareButtons'
import { notoSerif } from '@/config/fonts'
import { moreStories } from '@/lib/post'
import { cn, getFormattedDate } from '@/lib/utils'
import { AllTypes as Post } from 'contentlayer/generated'

import PostHeader from './PostHeader'

type PostpageProps = {
	post: Post
	params: { slug: string }
}

export default async function PostWithSlugView(props: Readonly<PostpageProps>) {
	const { post, params } = props
	const morePost: Post[] = moreStories(post)
	const morePostLength: number = morePost.length

	return (
		<div className="w-full">
			<PostHeader>{post.title}</PostHeader>
			<figure className="mb-8 sm:mx-0 md:mb-16">
				<PostCardImage
					title={`Cover image for ${post.title} -- ${post.imageAttribution?.raw}`}
					src={post.images}
					width={1000}
					height={500}
					className="md:aspect-video"
				/>
				{post.imageAttribution && (
					<PostImageAttribution
						attribution={post.imageAttribution.html}
					/>
				)}
			</figure>
			<div className="mx-auto max-w-4xl px-2 md:mt-2 md:px-6">
				<p className="prose-lg max-w-3xl md:prose-xl">
					Posted on {getFormattedDate(post.publishedAt)} under{' '}
					{post.tags.join(', ')}
				</p>
				<Balancer>
					<MdxContent
						title={post.title}
						publishDate={post.publishedAt}
						code={post.body.code}
					/>
				</Balancer>
			</div>
			<div className="flex w-full flex-col items-center justify-center gap-4 border-t p-6 dark:border-zinc-700">
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
			<div>
				{morePostLength && <MoreStories moreStories={morePost} />}
			</div>
		</div>
	)
}
