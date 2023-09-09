import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { Roboto_Mono } from "next/font/google";
import Link from "next/link";


const robotoMono = Roboto_Mono({
	subsets: ['latin'],
})

export default function Navbar() {
    return (
		<nav className="mx-auto flex w-full items-center justify-between px-6 py-8 md:max-w-5xl md:px-16">
			<Link
				href={"/"}
				className={cn(robotoMono.className, 'text-3xl font-extrabold')}
			>
				{'{}'}
			</Link>
			<ModeToggle />
		</nav>
	)
}