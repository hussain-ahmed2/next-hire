"use client";
import Link from "next/link";
import { ReactNode, useState } from "react";

type Props = {
	children: Readonly<ReactNode>;
	href: string;
	[key: string]: unknown;
};

export default function HoverPrefetchLink({ children, href, ...props }: Props) {
	const [active, setActive] = useState(false);

	function handleMouseEnter() {
		setActive(true);
	}

	return (
		<Link href={href} prefetch={active} onMouseEnter={handleMouseEnter} {...props}>
			{children}
		</Link>
	);
}
