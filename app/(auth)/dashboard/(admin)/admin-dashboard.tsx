import { LayoutDashboard } from "lucide-react";
import AdminLayout from "./admin-layout";
import { getTotalApplications, getTotalCompanies, getTotalJobs, getTotalUsers } from "../dashboard-action";
import { IUser } from "@/types/user";

export default async function AdminDashboard({ user }: { user: IUser }) {
	const totalUsers = await getTotalUsers();
	const totalCompanies = await getTotalCompanies();
	const totalJobs = await getTotalJobs();
	const totalApplications = await getTotalApplications();

	return (
		<AdminLayout user={user} icon={<LayoutDashboard className="size-5 stroke-3" />} title="Dashboard">
			<div className="flex-1">
				<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					<TotalCard title="Total Users" value={totalUsers} />
					<TotalCard title="Total Companies" value={totalCompanies} />
					<TotalCard title="Total Jobs" value={totalJobs} />
					<TotalCard title="Total Applications" value={totalApplications} />
				</div>
			</div>
		</AdminLayout>
	);
}

function TotalCard({ title, value }: { title: string; value: number }) {
	return (
		<div className="p-4 text-center border border-neutral-200 rounded-lg bg-white">
			<h3 className="text-lg md:text-xl font-black text-neutral-700">{title}</h3>
			<p className="font-black text-xl md:text-3xl mt-3 text-neutral-700">{value}</p>
		</div>
	);
}
