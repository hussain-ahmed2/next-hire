import jwt from "jsonwebtoken";

export function validateToken(token: string) {
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET!);
		return decoded;
	} catch (error) {
		console.error(error);
		return null;
	}
}
