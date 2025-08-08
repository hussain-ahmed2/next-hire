import { LayoutDashboard } from "lucide-react";
import AdminLayout from "./admin-layout";
import { getTotalApplications, getTotalCompanies, getTotalJobs, getTotalUsers } from "./admin-dashboard-action";
import TotalCard, { TotalCardSkeleton } from "./total-card";
import { Suspense } from "react";
import { IUser } from "@/types/user";

export default async function AdminDashboard({ user }: { user: IUser }) {
	return (
		<AdminLayout user={user} icon={<LayoutDashboard className="size-5 stroke-3" />} title="Dashboard">
			<div className="flex-1">
				<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					<Suspense fallback={<TotalCardSkeleton />}>
						<TotalCard title="Total Users" getValue={getTotalUsers} />
					</Suspense>
					<Suspense fallback={<TotalCardSkeleton />}>
						<TotalCard title="Total Companies" getValue={getTotalCompanies} />
					</Suspense>
					<Suspense fallback={<TotalCardSkeleton />}>
						<TotalCard title="Total Jobs" getValue={getTotalJobs} />
					</Suspense>
					<Suspense fallback={<TotalCardSkeleton />}>
						<TotalCard title="Total Applications" getValue={getTotalApplications} />
					</Suspense>
				</div>
			</div>
		</AdminLayout>
	);
}
