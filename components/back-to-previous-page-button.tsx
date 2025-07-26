"use client";
import { useRouter } from "next/navigation";

export default function BackToPreviousPageButton({ children }: { children: React.ReactNode }) {
	const router = useRouter();

	const goBack = () => router.back();

	return (
		<button onClick={goBack} className="text-purple-600 underline">
			{children}
		</button>
	);
}
