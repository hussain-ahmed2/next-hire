import { getUser } from "@/actions/auth";
import { Role } from "@/types/user";
import { redirect } from "next/navigation";

export default async function layout({ children }: { children: React.ReactNode }) {
	const user = await getUser();

	if (user?.role !== Role.Admin) {
		redirect("/dashboard");
	}

	return <>{children}</>;
}
