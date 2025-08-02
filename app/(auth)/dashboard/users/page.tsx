import { Users } from "lucide-react";
import AdminLayout from "../admin-layout";

export default function page() {
	return (
		<AdminLayout icon={<Users className="size-5 stroke-3" />} title="Users">
			Users
		</AdminLayout>
	);
}
