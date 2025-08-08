import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IUser } from "@/types/user";

export default function EditUserModal({ user }: { user: IUser }) {
	return (
		<Dialog>
			<form>
				<DialogTrigger asChild>
					<Button variant="ghost" size="sm" className="w-full font-normal flex justify-start">
						Edit
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Edit User</DialogTitle>
						<DialogDescription>Make changes to the user here. Click save when you&apos;re done.</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4">
						<div className="grid gap-3">
							<Label htmlFor="name">Name</Label>
							<Input id="name" name="name" defaultValue={user.name} />
						</div>
						<div className="grid gap-3">
							<Label htmlFor="email">Email</Label>
							<Input id="email" name="email" defaultValue={user.email} />
						</div>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<Button variant="outline">Cancel</Button>
						</DialogClose>
						<Button type="submit">Save changes</Button>
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	);
}
