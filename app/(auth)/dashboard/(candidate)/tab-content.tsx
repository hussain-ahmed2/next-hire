import { IUser } from "@/types/user";
import { TabType } from "../page";
import EditProfile from "./(tab-content)/edit-profile";
import AppliedJobs from "./(tab-content)/applied-jobs";
import SavedJobs from "./(tab-content)/saved-jobs";
import Profile from "./(tab-content)/profile";

export default function TabContent({ user, tab }: { user: IUser; tab?: TabType }) {
	return (
		<div className="flex-1 flex flex-col p-4 h-full max-h-[calc(100vh-12.75rem)] overflow-y-scroll scrollbar-hide">
			{tab === "edit-profile" ? <EditProfile user={user} /> : tab === "applied-jobs" ? <AppliedJobs /> : tab === "saved-jobs" ? <SavedJobs /> : <Profile user={user} />}
		</div>
	);
}
