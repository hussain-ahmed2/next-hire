"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Role, IUser } from "@/types/user";
import LogoutButton from "../logout-button";

export default function MobileMenu({ user }: { user: IUser | null }) {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	function handleClose() {
		if (!isOpen) return;
		setIsOpen(false);
	}

	function handleToggle() {
		setIsOpen(!isOpen);
	}

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node) && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<>
			{/* Mobile Menu Toggle */}
			<button ref={buttonRef} className="md:hidden relative block size-10 -mr-2 hover:bg-purple-100 rounded" onClick={handleToggle}>
				<X className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition duration-300 ${isOpen ? "opacity-100 delay-150" : "opacity-0"}`} />
				<Menu className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition duration-300 ${isOpen ? "opacity-0" : "opacity-100 delay-150"}`} />
			</button>

			{/* Mobile Menu */}
			<motion.div
				ref={ref}
				initial={{ opacity: 0, x: "100%" }}
				animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" }}
				transition={{ duration: 0.3 }}
				className="fixed top-16 left-0 right-0 bottom-0 flex flex-col bg-white z-50 container mx-auto max-w-7xl p-4 gap-2 shadow-md">
				<Link className="p-2 hover:bg-purple-100 rounded transition duration-300" href="/" onClick={handleClose}>
					Home
				</Link>
				<Link className="p-2 hover:bg-purple-100 rounded transition duration-300" href="/jobs" onClick={handleClose}>
					Jobs
				</Link>
				<Link className="p-2 hover:bg-purple-100 rounded transition duration-300" href="/employers" onClick={handleClose}>
					Employers
				</Link>
				<Link className="p-2 hover:bg-purple-100 rounded transition duration-300" href="/candidates" onClick={handleClose}>
					Candidates
				</Link>
				{user ? (
					<>
						<Link className="p-2 hover:bg-purple-100 rounded transition duration-300" href="/dashboard" onClick={handleClose}>
							Dashboard
						</Link>
						<span className="px-2">
							<LogoutButton cb={handleClose} />
						</span>
					</>
				) : (
					<>
						<Link className="p-2 hover:bg-purple-100 rounded transition duration-300" href="/login" onClick={handleClose}>
							Login
						</Link>
						<Link className="p-2 hover:bg-purple-100 rounded transition duration-300" href="/register" onClick={handleClose}>
							Register
						</Link>
					</>
				)}

				{user?.role === Role.Employer && (
					<Link className="p-2 hover:bg-purple-100 rounded transition duration-300" href="/post-job" onClick={handleClose}>
						Post a Job
					</Link>
				)}
			</motion.div>
		</>
	);
}
