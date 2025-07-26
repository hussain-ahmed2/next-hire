import { getUser } from "@/actions/auth";
import MobileMenu from "./mobile-menu";
import Link from "next/link";
import { IUser, Role } from "@/types/user";
import LogoutButton from "../logout-button";

export default async function ProtectedNavLinks() {
	const user: IUser | null = await getUser();

	return (
		<>
			{/* Right Side Actions */}
			<div className="hidden md:flex items-center gap-4">
				{user ? (
					<>
						<Link href="/dashboard" className="font-medium hover:text-purple-600 transition duration-300">
							Dashboard
						</Link>
						<LogoutButton />
					</>
				) : (
					<>
						<Link href="/login" className="px-4 py-1 font-medium hover:font-normal hover:bg-purple-700 hover:text-white rounded transition duration-300 cursor-pointer">
							Login
						</Link>
						<Link href="/register" className="px-4 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded transition duration-300 cursor-pointer">
							Register
						</Link>
					</>
				)}
				{user?.role === Role.Employer && (
					<Link href="/post-job" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition">
						Post a Job
					</Link>
				)}
			</div>

			{/* Mobile Menu */}
			<MobileMenu user={user} />
		</>
	);
}
