import { Role } from "@/types/user";
import { getUser } from "@/actions/auth";
import AdminDashboard from "./admin-dashboard";
import UserDashboard from "./user-dashboard";
import { redirect } from "next/navigation";

export default async function page() {
	const user = await getUser();
	if (!user) redirect("/logout");

	return user?.role === Role.Admin ? <AdminDashboard /> : <UserDashboard />;
}
