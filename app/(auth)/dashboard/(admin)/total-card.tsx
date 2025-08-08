import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default async function TotalCard({ title, getValue }: { title: string; getValue: () => Promise<number> }) {
	const value = (await getValue()) || 0;
	return (
		<Card className="text-center">
			<CardHeader className="pb-2">
				<CardTitle className="text-lg md:text-xl font-black text-neutral-800">{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="font-black text-xl md:text-3xl text-neutral-800">{value}</p>
			</CardContent>
		</Card>
	);
}

export function TotalCardSkeleton() {
	return (
		<Card className="text-center bg-white animate-pulse">
			<CardHeader className="pb-2">
				<CardTitle className="font-black text-lg md:text-xl text-neutral-800">
					<Skeleton className="h-7 w-full" />
				</CardTitle>
			</CardHeader>
			<CardContent>
				<Skeleton className="h-8 w-8 mx-auto" />
			</CardContent>
		</Card>
	);
}
