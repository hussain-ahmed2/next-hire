"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false });

export default function ProgressBar() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		NProgress.start();
		const timeout = setTimeout(() => {
			NProgress.done();
		}, 50);

		return () => {
			clearTimeout(timeout);
			NProgress.done();
		};
	}, [pathname, searchParams]);

	return null;
}
