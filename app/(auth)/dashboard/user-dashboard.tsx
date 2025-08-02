import { IUser } from "@/types/user";

export default function UserDashboard({ user }: { user: IUser }) {
	return (
		<div>
			<pre>{JSON.stringify(user, null, 2)}</pre>
		</div>
	);
}
