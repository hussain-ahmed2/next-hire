import ProtectedNavLinks from "./protected-nav-links";
import { Suspense } from "react";
import HoverPrefetchLink from "../ui/hover-prefetch-link";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between min-h-16 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			{/* Logo */}
			<Link href="/" className="text-2xl font-black text-purple-600">
				NextHire
			</Link>

			{/* Desktop Menu */}
			<nav className="hidden md:flex gap-4 items-center font-medium">
				<Link href="/" className="hover:text-purple-600 transition duration-300">
					Home
				</Link>
				<HoverPrefetchLink href="/jobs" className="hover:text-purple-600 transition duration-300">
					Jobs
				</HoverPrefetchLink>
				<HoverPrefetchLink href="/employers" className="hover:text-purple-600 transition duration-300">
					Employers
				</HoverPrefetchLink>
				<HoverPrefetchLink href="/candidates" className="hover:text-purple-600 transition duration-300">
					Candidates
				</HoverPrefetchLink>
			</nav>

			<Suspense fallback={<div>Loading...</div>}>
				<ProtectedNavLinks />
			</Suspense>
		</nav>
	);
}
