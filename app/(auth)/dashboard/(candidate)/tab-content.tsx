import { IUser } from "@/types/user";
import { TabType } from "../page";

export default function TabContent({ user, tab }: { user: IUser; tab?: TabType }) {
	return (
		<div className="flex-1 flex flex-col p-4">
			{tab === "edit-profile" ? <div>Edit Profile</div> : tab === "applied-jobs" ? <div>Applied Jobs</div> : tab === "saved-jobs" ? <div>Saved Jobs</div> : <div>Profile</div>}
		</div>
	);
}
