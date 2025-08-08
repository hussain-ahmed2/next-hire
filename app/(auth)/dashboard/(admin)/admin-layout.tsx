import { IUser } from "@/types/user";
import MainContent from "./main-content";
import Sidebar from "./sidebar";

export default function AdminLayout({ children, title, icon, user }: { children: React.ReactNode; title: string; icon?: React.ReactNode; user: IUser }) {
	return (
		<div className="flex-1 flex bg-neutral-100 overflow-hidden absolute top-0 left-0 right-0 inset-0 z-50 p-4">
			<div className="flex-1 flex flex-col border border-neutral-300 rounded-lg bg-white max-w-7xl mx-auto overflow-hidden">
				<div className="flex-1 flex flex-row">
					<Sidebar user={user} />
					<hr className="h-full border-r border-neutral-300" />
					<MainContent title={title} icon={icon}>
						{children}
					</MainContent>
				</div>
			</div>
		</div>
	);
}
