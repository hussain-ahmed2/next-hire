"use client";

import { ImagePlusIcon } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function AvatarInput({ avatar }: { avatar?: string }) {
	const [image, setImage] = useState(avatar || "/default-avatar.svg");
	const inputRef = useRef<HTMLInputElement>(null);

	function handleAvatarChange(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				if (reader.result) {
					setImage(reader.result as string);
					inputRef.current?.setAttribute("value", reader.result as string);
				}
			};
			reader.readAsDataURL(file);
		}
	}

	return (
		<label htmlFor="avatar" className="cursor-pointer w-fit mx-auto rounded-full group relative">
			<Image className="rounded-full border-4 border-neutral-200 group-hover:opacity-50 transition duration-300" src={image} alt="" width={100} height={100} />
			<input id="avatar" onChange={handleAvatarChange} type="file" className="hidden" accept="image/*" />
			<input ref={inputRef} hidden type="text" name="avatar" />
			<ImagePlusIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
		</label>
	);
}
