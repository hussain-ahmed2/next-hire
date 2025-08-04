import { Role } from "@/types/user";
import { getUser } from "@/actions/auth";
import AdminDashboard from "./(admin)/admin-dashboard";
import { redirect } from "next/navigation";
import CandidateDashboard from "./(candidate)/candidate-dashboard";

export type TabType = "profile" | "edit-profile" | "applied-jobs" | "saved-jobs";

export default async function page({ searchParams }: { searchParams: Promise<{ tab?: string }> }) {
	const user = await getUser();
	if (!user) redirect("/logout");

	const { tab = "profile" } = (await searchParams) as { tab?: TabType };

	return user?.role === Role.Admin ? <AdminDashboard user={user} /> : user.role === Role.Employer ? <div>Employer Dashboard</div> : <CandidateDashboard tab={tab} user={user} />;
}
