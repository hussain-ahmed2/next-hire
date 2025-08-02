import { Contact } from "lucide-react";
import AdminLayout from "../admin-layout";

export default function page() {
	return (
		<AdminLayout icon={<Contact className="size-5 stroke-3" />} title="Jobs">
			Jobs
		</AdminLayout>
	);
}
