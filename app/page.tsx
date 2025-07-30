import Testimonials from "@/components/testimonials";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex-1 flex flex-col">
			<section className="min-h-[calc(100vh-8rem)] flex items-center justify-between gap-4 md:gap-8 relative">
				<div className="w-full max-md:text-center md:w-1/2">
					<p className="text-xl md:text-2xl font-black text-neutral-600 max-md:text-neutral-800 mb-8">Easiest way to find a perfect job</p>
					<h1 className="text-4xl md:text-6xl font-black mb-10 text-purple-700">Find Your Next Dream Job</h1>
					<div className="flex items-center gap-4 md:gap-8 max-md:justify-center">
						<Link href="/jobs" className="btn-submit max-md:text-sm px-6 md:px-8 md:py-3 text-nowrap">
							Looking for a job?
						</Link>
						<Link href="/candidates" className="btn-success max-md:text-sm px-6 md:px-8 md:py-3 text-nowrap">
							Find a Talent
						</Link>
					</div>
				</div>
				<div className="max-md:absolute top-0 left-0 inset-0 max-md:-z-10 max-md:opacity-75 md:w-1/2">
					<Image className="w-full h-full" src="/job-offer.svg" alt="hero" width={1000} height={1000} />
				</div>
			</section>

			<section className="min-h-96 flex flex-col items-center justify-center text-center">
				<p className="text-6xl md:text-8xl font-black text-purple-700 mb-6">1000+</p>
				<h2 className="text-3xl md:text-5xl font-black mb-8">Browse From Our Top Jobs</h2>
				<p className="max-w-3xl text-lg md:text-xl font-medium text-neutral-700">
					The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes. Placeholder text commonly used.
				</p>
			</section>

			<section>
				<Testimonials />
			</section>
		</div>
	);
}
