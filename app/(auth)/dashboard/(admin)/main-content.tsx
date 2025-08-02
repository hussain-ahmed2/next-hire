export default function MainContent({ children, title, icon = "" }: { children: React.ReactNode; title: string; icon?: React.ReactNode }) {
	return (
		<div className="flex-1 flex flex-col">
			<div className="min-h-12 flex p-2 m-2">
				<h3 className="flex items-center gap-2">
					<span>{icon}</span>
					<span className="text-lg md:text-xl font-black">{title}</span>
				</h3>
			</div>
			<hr className="text-neutral-300" />
			<div className="p-4 flex-1 flex bg-neutral-50">{children}</div>
		</div>
	);
}
