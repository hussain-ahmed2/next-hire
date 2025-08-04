import HoverPrefetchLink from "@/components/ui/hover-prefetch-link";
import { TabType } from "../page";

export default function TabBar({ tab }: { tab?: TabType }) {
	return (
		<div className="grid sm:grid-cols-4 border-b border-neutral-300">
			<HoverPrefetchLink
				className={`p-2 text-center transition duration-300 ${tab !== "edit-profile" && tab !== "applied-jobs" && tab !== "saved-jobs" ? "bg-purple-200" : "hover:bg-neutral-200"}`}
				href="/dashboard?tab=profile">
				Profile
			</HoverPrefetchLink>
			<HoverPrefetchLink className={`p-2 text-center transition duration-300 ${tab === "edit-profile" ? "bg-purple-200" : "hover:bg-neutral-200"}`} href="/dashboard?tab=edit-profile">
				Edit Profile
			</HoverPrefetchLink>
			<HoverPrefetchLink className={`p-2 text-center transition duration-300 ${tab === "applied-jobs" ? "bg-purple-200" : "hover:bg-neutral-200"}`} href="/dashboard?tab=applied-jobs">
				Applied Jobs
			</HoverPrefetchLink>
			<HoverPrefetchLink className={`p-2 text-center transition duration-300 ${tab === "saved-jobs" ? "bg-purple-200" : "hover:bg-neutral-200"}`} href="/dashboard?tab=saved-jobs">
				Saved Jobs
			</HoverPrefetchLink>
		</div>
	);
}
