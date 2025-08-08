import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { IUser } from "@/types/user";

export default function ViewUserModal({ user }: { user: IUser }) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost" size="sm" className="w-full font-normal flex justify-start">
					View
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>User Details</DialogTitle>
					<DialogDescription>You can view the details of the user here.</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4">
					<div className="grid gap-3">
						<div className="flex items-center gap-3">
							<Avatar className="size-10">
								<AvatarImage src={user?.avatar} />
								<AvatarFallback>{user.name?.charAt(0)?.toUpperCase()}</AvatarFallback>
							</Avatar>
							<div>
								<h3 className="text-lg font-semibold">{user.name}</h3>
								<p className="text-sm text-muted-foreground">{user.email}</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<Badge variant="outline">{user.role}</Badge>
						</div>
					</div>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant="outline">Close</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
