"use client";
import HoverPrefetchLink from "@/components/ui/hover-prefetch-link";
import useAdminDashboardStore from "@/store/admin-dashboard-state";
import { IUser } from "@/types/user";
import { Building2, Contact, FileUser, LayoutDashboard, SidebarClose, SidebarOpen, User, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const LINKS = [
	{ href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
	{ href: "/dashboard/users", label: "Users", icon: Users },
	{ href: "/dashboard/companies", label: "Companies", icon: Building2 },
	{ href: "/dashboard/jobs", label: "Jobs", icon: Contact },
	{ href: "/dashboard/applications", label: "Applications", icon: FileUser },
];

export default function Sidebar({ user }: { user: IUser }) {
	const pathname = usePathname();
	const isOpen = useAdminDashboardStore((state) => state.isOpen);
	const toggle = useAdminDashboardStore((state) => state.toggle);

	useEffect(() => {
		if (window) {
			const isMobile = window.innerWidth < 768;
			if (isMobile) toggle();
		}
	}, [toggle]);

	return (
		<div className={`flex flex-col transition-all duration-300 ${isOpen ? "w-48 lg:w-56" : "w-13"}`}>
			<div className="m-2 flex items-center justify-between min-h-12 transition-all duration-300 overflow-hidden">
				<Link href="/" className={`text-lg md:text-xl font-black transition origin-left duration-300 ${isOpen ? "" : "w-0 invisible opacity-0"}`}>
					<span className="text-purple-600 px-2">NextHire</span>
				</Link>
				<button onClick={toggle} className="p-2 rounded-md hover:bg-neutral-200 flex transition-all duration-300">
					<span className={`${isOpen ? "w-0 invisible opacity-0" : ""}`}>
						<SidebarOpen className="size-5" />
					</span>
					<span className={`${isOpen ? "" : "w-0 invisible opacity-0"}`}>
						<SidebarClose className="size-5" />
					</span>
				</button>
			</div>
			<hr className="text-neutral-300" />
			<div className="flex-1 flex flex-col p-2 space-y-2">
				<div className="flex flex-col space-y-2 flex-1">
					{LINKS.map((link) => (
						<HoverPrefetchLink key={link.href} href={link.href} className={`p-2 rounded-md flex ${pathname === link.href ? "bg-purple-200" : "hover:bg-neutral-200"}`}>
							<div className="flex items-center gap-2">
								<span className="aspect-square">{link.icon && <link.icon className="size-5" />}</span>
								<span className={`font-medium text-sm transition origin-left duration-300 ${isOpen ? "" : "w-0 opacity-0"}`}>{link.label}</span>
							</div>
						</HoverPrefetchLink>
					))}
				</div>

				<button className="p-2 rounded-md flex hover:bg-neutral-200">
					<div className="flex items-center gap-2">
						<span className="aspect-square">
							<User className="size-5" />
						</span>
						<span className={`font-medium text-sm transition origin-left duration-300 text-nowrap ${isOpen ? "" : "w-0 opacity-0"}`}>{user.name}</span>
					</div>
				</button>
			</div>
		</div>
	);
}
