"use client";

import { logout } from "@/actions/auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function LogoutPage() {
	useEffect(() => {
		async function run() {
			await logout();
			redirect("/login");
		}
		run();
	}, []);
	return null;
}
