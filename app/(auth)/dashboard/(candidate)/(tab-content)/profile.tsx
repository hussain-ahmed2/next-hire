import HoverPrefetchLink from "@/components/ui/hover-prefetch-link";
import UserAvatar from "@/components/user-avatar";
import { IUser } from "@/types/user";

export default function Profile({ user }: { user: IUser }) {
	return (
		<div className="flex-1 flex flex-col">
			<div className="flex-1 flex flex-col">
				<h2 className="text-2xl md:text-3xl font-black mb-5">Profile</h2>
				<div>
					<div className="size-24 aspect-square mb-5">
						<UserAvatar avatar={user.avatar} />
					</div>
					<p className="font-medium text-neutral-700 mb-2">Name: {user.name}</p>
					<p className="font-medium text-neutral-700">Email: {user.email}</p>
				</div>
				<HoverPrefetchLink href="/dashboard?tab=edit-profile" className="btn-submit mt-5 w-fit">
					Edit
				</HoverPrefetchLink>
			</div>
		</div>
	);
}
