export default function Footer() {
	return (
		<footer className="border-t border-zinc-300 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950">
			<div className="container mx-auto px-5">
				<div className="flex flex-col items-center py-16 lg:flex-row">
					<h3 className="text-center text-sm font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-lg">
						made with ❤️ by{' '}
						<span className="font-semibold">RXBCH</span> in
						Surabaya, Indonesia
					</h3>
				</div>
			</div>
		</footer>
	)
}
