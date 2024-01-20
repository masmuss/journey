import Navbar from '@/components/layout/navbar'
import HomePage from '@/views/Home'

export default async function Home() {
	return (
		<section>
			<Navbar className="lg:flex-row lg:justify-between">
				<h1 className="text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
					A Journey.
				</h1>
			</Navbar>
			<HomePage />
		</section>
	)
}
