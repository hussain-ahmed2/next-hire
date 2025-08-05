import { IUser } from "@/types/user";
import EditProfileForm from "./edit-profile-form";

export default function EditProfile({ user }: { user: IUser }) {
	return (
		<div className="flex-1 flex flex-col">
			<div className="flex-1 flex flex-col">
				<h2 className="text-2xl md:text-3xl font-black mb-5">Edit Profile</h2>
				<div className="overflow-y-auto">
					<EditProfileForm user={user} />
				</div>
			</div>
		</div>
	);
}
