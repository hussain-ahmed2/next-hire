import BackToPreviousPageButton from "@/components/back-to-previous-page-button";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex-1 flex items-center justify-center">
			<div>
				<h1 className="text-3xl font-black mb-4 text-center text-purple-500">404</h1>
				<p className="text-center mb-4 font-medium text-neutral-600">Page not found</p>
				<p className="mt-2 text-center">The page you are looking for does not exist.</p>
				<p className="mt-2 text-center">
					Return to{" "}
					<Link className="text-purple-600 underline" href="/">
						Home
					</Link>
					, or <BackToPreviousPageButton>go back</BackToPreviousPageButton>
				</p>
			</div>
		</div>
	);
}
