import { Users } from "lucide-react";
import AdminLayout from "../admin-layout";
import { getUser } from "@/actions/auth";
import { redirect } from "next/navigation";

export default async function page() {
	const user = await getUser();
	if (!user) redirect("/logout");

	return (
		<AdminLayout user={user} icon={<Users className="size-5 stroke-3" />} title="Users">
			Users
		</AdminLayout>
	);
}
