'use client'

import { usePathname } from 'next/navigation'

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname()

	const errorPaths = ['/404', '/500']

	return <>{!errorPaths.includes(pathname) && children}</>
}