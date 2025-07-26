"use client";

import { logout } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { useActionState } from "react";

type Props = {
	cb?: () => void;
};

export default function LogoutButton({ cb }: Props) {
	const router = useRouter();
	const [, formAction, isPending] = useActionState(async () => {
		const res = await logout();
		if (res) {
			if (cb) {
				cb();
			}
			router.refresh();
		}
		return res;
	}, false);
	return (
		<form action={formAction}>
			<button type="submit" className="px-4 py-1 bg-red-600 hover:bg-red-700 text-white rounded transition duration-300 cursor-pointer" disabled={isPending}>
				Logout
			</button>
		</form>
	);
}
