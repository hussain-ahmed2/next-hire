import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	const cookieStore = request.cookies;
	const token = cookieStore.get("token")?.value || null;
	const pathname = request.nextUrl.pathname;

	// If no token and trying to access protected routes, redirect to /login
	if (!token && pathname === "/dashboard") {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	// If token exists and trying to access /login or /register, redirect to /dashboard
	if (token && GUEST_ROUTES.includes(pathname)) {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	// Otherwise continue
	return NextResponse.next();
}

export const config = {
	// Middleware runs on these paths
	matcher: ["/login", "/register", "/dashboard"],
};

const GUEST_ROUTES = ["/login", "/register"];
