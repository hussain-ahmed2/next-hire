import MainContent from "./main-content";
import Sidebar from "./sidebar";

export default function AdminLayout({ children, title, icon }: { children: React.ReactNode; title: string; icon?: React.ReactNode }) {
	return (
		<div className="flex-1 flex bg-neutral-100 overflow-hidden absolute top-0 left-0 right-0 inset-0 z-[999]">
			<div className="flex-1 flex flex-col m-4 border border-neutral-300 rounded-lg bg-white max-w-7xl mx-auto">
				<div className="flex-1 flex flex-row">
					<Sidebar />
					<hr className="h-full border-r border-neutral-300" />
					<MainContent title={title} icon={icon}>
						{children}
					</MainContent>
				</div>
			</div>
		</div>
	);
}
