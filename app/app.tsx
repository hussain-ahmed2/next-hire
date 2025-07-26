import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";

export default function App({ children }: { children: Readonly<React.ReactNode> }) {
	return (
		<>
			<header className="fixed top-0 left-0 right-0 bg-white z-50">
				<Navbar />
			</header>
			<main className="flex flex-col min-h-[calc(100vh-4rem)] pt-16 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>
			<footer className="bg-purple-600 text-white">
				<Footer />
			</footer>
		</>
	);
}
