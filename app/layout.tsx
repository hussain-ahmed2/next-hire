import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import App from "./app";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NextHire",
	description: "NextHire is a hiring platform that uses Next.js and other modern technologies to streamline the hiring process for both candidates and employers.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${karla.className} antialiased`}>
				<App>{children}</App>
			</body>
		</html>
	);
}
