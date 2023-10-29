/* eslint-disable import/no-duplicates */
// eslint-disable-next-line sort-imports
import { clsx, type ClassValue } from 'clsx'
import { format, parseISO } from 'date-fns'
import { id } from 'date-fns/locale'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function getFormattedDate(
	dateString: string,
	dateFormat?: string,
): string {
	return format(parseISO(dateString), dateFormat ?? 'LLLL d, yyyy', {
		locale: id,
	})
}

export function readTimeCount(text: string) {
	const wordsPerMinute = 200
	const noOfWords = text.split(/\s/g).length
	const minutes = noOfWords / wordsPerMinute
	return Math.ceil(minutes)
}
