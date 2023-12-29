import {
	Hind,
	Merriweather,
	Montserrat,
	Noto_Sans,
	Noto_Serif,
	Source_Sans_3,
} from 'next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '700', '800'],
})

const hind = Hind({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

const merriweather = Merriweather({
	subsets: ['latin'],
	weight: ['300', '400', '700'],
	display: 'swap',
})

const sourceSans3 = Source_Sans_3({
	subsets: ['latin'],
	weight: ['300', '400', '700', '800'],
	display: 'swap',
})

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

export { hind, merriweather, montserrat, notoSans, notoSerif, sourceSans3 }
