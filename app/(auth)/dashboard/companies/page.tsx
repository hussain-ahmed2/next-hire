import { Building2 } from "lucide-react";
import AdminLayout from "../admin-layout";

export default function page() {
	return (
		<AdminLayout icon={<Building2 className="size-5 stroke-3" />} title="Companies">
			Companies
		</AdminLayout>
	);
}
