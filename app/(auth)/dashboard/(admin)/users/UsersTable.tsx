import { getAllUsers } from "./users-action";
import { EllipsisVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import EditUserModal from "./edit-user-modal";

export default async function UsersTable() {
	const users = await getAllUsers();

	return (
		<div className="flex flex-col flex-1 bg-white">
			<div className="w-full border shadow rounded-lg overflow-hidden">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-16">No.</TableHead>
							<TableHead className="w-16">Avatar</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>Email</TableHead>
							<TableHead>Role</TableHead>
							<TableHead className="w-16">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{users.map((user, index) => (
							<TableRow key={user._id} className="hover:bg-neutral-50">
								<TableCell className="font-medium">{index + 1}</TableCell>
								<TableCell>
									<Avatar className="size-8">
										<AvatarImage src={user?.avatar || "/default-avatar.svg"} alt="avatar" />
										<AvatarFallback>{user.name?.charAt(0)?.toUpperCase()}</AvatarFallback>
									</Avatar>
								</TableCell>
								<TableCell className="font-medium">{user.name}</TableCell>
								<TableCell>{user.email}</TableCell>
								<TableCell>
									<Badge variant="secondary" className="capitalize">
										{user.role}
									</Badge>
								</TableCell>
								<TableCell>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button variant="ghost" size="sm">
												<EllipsisVertical className="size-4" />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											<DropdownMenuItem asChild>
												<EditUserModal user={user} />
											</DropdownMenuItem>
											<DropdownMenuItem asChild>
												<Button variant="ghost" size="sm" className="w-full font-normal flex justify-start">
													View
												</Button>
											</DropdownMenuItem>
											<DropdownMenuItem className="text-red-600" asChild>
												<Button variant="ghost" size="sm" className="w-full font-normal flex justify-start">
													Delete
												</Button>
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}

export function UsersTableSkeleton() {
	return (
		<div className="flex flex-col flex-1 bg-white">
			<div className="w-full border rounded-lg">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-16">No.</TableHead>
							<TableHead className="w-16">Avatar</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>Email</TableHead>
							<TableHead>Role</TableHead>
							<TableHead className="w-16">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{Array.from({ length: 5 }).map((_, i) => (
							<TableRow key={i}>
								<TableCell>
									<Skeleton className="h-4 w-6" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-8 w-8 rounded-full" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-32" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-40" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-16" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-6" />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
