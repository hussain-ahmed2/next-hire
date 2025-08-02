import { FileUser } from "lucide-react";
import AdminLayout from "../admin-layout";

export default function page() {
	return (
		<AdminLayout icon={<FileUser className="size-5 stroke-3" />} title="Applications">
			Applications
		</AdminLayout>
	);
}
