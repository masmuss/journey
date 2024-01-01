import { Noto_Sans, Noto_Serif } from 'next/font/google'

const notoSerif = Noto_Serif({
	subsets: ['latin'],
	weight: ['400', '700'],
	display: 'swap',
})

const notoSans = Noto_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
})

export { notoSans, notoSerif }
