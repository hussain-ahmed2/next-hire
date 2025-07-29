import { getUser } from "@/actions/auth";
import MobileMenu from "./mobile-menu";
import { IUser, Role } from "@/types/user";
import LogoutButton from "../logout-button";
import HoverPrefetchLink from "../ui/hover-prefetch-link";

export default async function ProtectedNavLinks() {
	const user: IUser | null = await getUser();

	return (
		<>
			{/* Right Side Actions */}
			<div className="hidden md:flex items-center gap-4">
				{user ? (
					<>
						<HoverPrefetchLink href="/dashboard" className="font-medium hover:text-purple-600 transition duration-300">
							Dashboard
						</HoverPrefetchLink>
						<LogoutButton />
					</>
				) : (
					<>
						<HoverPrefetchLink href="/login" className="px-4 py-1 hover:bg-purple-700 hover:text-white rounded transition duration-300 cursor-pointer">
							Login
						</HoverPrefetchLink>
						<HoverPrefetchLink href="/register" className="px-4 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded transition duration-300 cursor-pointer">
							Register
						</HoverPrefetchLink>
					</>
				)}
				{user?.role === Role.Employer && (
					<HoverPrefetchLink href="/post-job" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition">
						Post a Job
					</HoverPrefetchLink>
				)}
			</div>

			{/* Mobile Menu */}
			<MobileMenu user={user} />
		</>
	);
}
