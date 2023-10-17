import { Hind, Montserrat } from 'next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '700', '800'],
})

const hind = Hind({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

export { hind, montserrat }
