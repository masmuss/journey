import Navbar from '@/components/layout/navbar'
import HomePage from '@/views/Home'

export default async function Home() {
	return (
		<main className="container mx-auto px-5">
			<Navbar className="lg:flex-row lg:justify-between">
				<h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
					A Journey.
				</h1>
			</Navbar>
			<HomePage />
		</main>
	)
}
