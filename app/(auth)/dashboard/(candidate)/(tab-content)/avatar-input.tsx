"use client";

import { ImagePlusIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function AvatarInput({ avatar }: { avatar?: string }) {
	const [image, setImage] = useState(avatar || "/default-avatar.svg");

	function handleAvatarChange(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				if (reader.result) {
					setImage(reader.result as string);
				}
			};
			reader.readAsDataURL(file);
		}
	}

	return (
		<label htmlFor="avatar" className="cursor-pointer w-fit mx-auto rounded-full group relative">
			<Image className="rounded-full border-4 border-neutral-200 group-hover:opacity-50 transition duration-300" src={image} alt="" width={120} height={120} />
			<input id="avatar" onChange={handleAvatarChange} type="file" className="hidden" accept="image/*" />
			<input hidden type="text" name="avatar" value={image} onChange={(e) => setImage(e.target.value)} />
			<ImagePlusIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			<p className="text-center font-medium">Change avatar</p>
		</label>
	);
}
