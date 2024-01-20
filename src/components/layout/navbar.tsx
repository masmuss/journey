import siteMetadata from '@/config/site-metadata'
import { cn } from '@/lib/utils'

type NavbarProps = {
	children: React.ReactNode
	className?: string
}
export default function Navbar({ children, className }: Readonly<NavbarProps>) {
	return (
		<nav
			className={cn(
				'mb-16 mt-16 flex flex-col items-center md:mb-12',
				className,
			)}
		>
			{children}
			<h4 className="mt-5 text-center text-lg italic md:pl-8 md:text-left">
				&mdash; {siteMetadata.headerTitle}.
			</h4>
		</nav>
	)
}
