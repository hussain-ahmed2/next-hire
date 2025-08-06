"use client";

import { EditProfileState, updateUser } from "@/actions/auth";
import InputField from "@/components/input-field";
import { IUser } from "@/types/user";
import Link from "next/link";
import AvatarInput from "./avatar-input";
import { useActionState } from "react";
import { redirect } from "next/navigation";

export default function EditProfileForm({ user }: { user: IUser }) {
	const [state, formAction, isPending] = useActionState(
		async (prevState: EditProfileState, formData: FormData) => {
			const response = await updateUser(prevState, formData);
			if (response.success) redirect("/dashboard?tab=profile");
			return response;
		},
		{
			form: {
				name: user.name,
				email: user.email,
				bio: user?.bio || "",
				oldPassword: "",
				newPassword: "",
				avatar: user?.avatar || "",
			},
			errors: {
				name: "",
				email: "",
				bio: "",
				oldPassword: "",
				newPassword: "",
				avatar: "",
			},
			success: false,
		}
	);

	return (
		<form action={formAction} className="flex-1 flex flex-col gap-4 max-w-3xl mx-auto mb-4">
			<AvatarInput avatar={state.form?.avatar} />

			<InputField name="name" label="Name" defaultValue={state.form?.name} error={state.errors?.name} placeholder="Enter your full name" />
			<InputField name="email" label="Email" defaultValue={state.form?.email} error={state.errors?.email} placeholder="Enter your email" />

			<div className="flex flex-col">
				<label className="mb-1 font-medium" htmlFor="bio">
					Bio
				</label>
				<textarea
					name="bio"
					id="bio"
					defaultValue={state.form?.bio}
					rows={4}
					className="p-2 border border-purple-200 rounded outline-none focus:ring-2 focus:border-purple-500 ring-purple-200"
					placeholder="Enter your bio"
				/>
				<div className="overflow-hidden">
					<p className={`text-red-500 text-sm transition-all duration-300 ${state.errors?.bio ? "" : "opacity-0 h-0 translate-x-full"}`}>{state.errors?.bio}</p>
				</div>
			</div>

			<p className="mt-5 font-medium text-lg">
				Change password <span className="font-bold">(optional)</span>
			</p>
			<InputField type="password" name="oldPassword" label="Old Password" defaultValue={state.form?.oldPassword} error={state.errors?.oldPassword} placeholder="Enter your old password" />
			<InputField type="password" name="newPassword" label="New Password" defaultValue={state.form?.newPassword} error={state.errors?.newPassword} placeholder="Enter your new password" />

			<div className="flex flex-col-reverse sm:flex-row gap-4 w-full max-w-xl mx-auto">
				<Link href="/dashboard?tab=profile" className="btn text-center grow">
					Cancel
				</Link>
				<button disabled={isPending} type="reset" className="btn-warning grow">
					Reset
				</button>
				<button disabled={isPending} type="submit" className="btn-submit grow">
					Update
				</button>
			</div>
		</form>
	);
}
