import { User } from "lucide-react";
import Image from "next/image";

export default function UserAvatar({ avatar = "", className = "" }: { avatar?: string; className?: string }) {
	return (
		<div className={"rounded-full overflow-hidden transition-all duration-300 " + className}>
			{avatar ? (
				<Image className="rounded-full border border-neutral-200" src={avatar} alt="avatar" width={100} height={100} />
			) : (
				<User className="text-neutral-700 size-24 rounded-full border-4" />
			)}
		</div>
	);
}
