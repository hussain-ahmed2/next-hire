import { IUser } from "@/types/user";
import TabBar from "./tab-bar";
import TabContent from "./tab-content";
import { TabType } from "../page";

export default function CandidateDashboard({ user, tab }: { user: IUser; tab?: TabType }) {
	return (
		<div className="flex-1 flex flex-col">
			<div className="flex-1 border border-neutral-300 my-4 rounded-lg overflow-hidden">
				<TabBar tab={tab} />
				<TabContent tab={tab} user={user} />
			</div>
		</div>
	);
}
