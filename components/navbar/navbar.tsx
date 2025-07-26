import Link from "next/link";
import ProtectedNavLinks from "./protected-nav-links";
import { Suspense } from "react";

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between min-h-16 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			{/* Logo */}
			<Link href="/" className="text-2xl font-black text-purple-600">
				NextHire
			</Link>

			{/* Desktop Menu */}
			<nav className="hidden md:flex gap-4 items-center font-medium">
				<Link className="hover:text-purple-600 transition duration-300" href="/">
					Home
				</Link>
				<Link className="hover:text-purple-600 transition duration-300" href="/jobs">
					Jobs
				</Link>
				<Link className="hover:text-purple-600 transition duration-300" href="/employers">
					Employers
				</Link>
				<Link className="hover:text-purple-600 transition duration-300" href="/candidates">
					Candidates
				</Link>
			</nav>

			<Suspense fallback={<div>Loading...</div>}>
				<ProtectedNavLinks />
			</Suspense>
		</nav>
	);
}
