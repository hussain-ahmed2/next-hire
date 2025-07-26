import { Schema, model, models, Document } from "mongoose";
import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";
import { IUser, Role } from "@/types/user";

export type UserDocument = IUser & Document & { comparePassword: (password: string) => Promise<boolean>; generateToken: () => string; verifyToken: (token: string) => JwtPayload | string | null };

const userSchema = new Schema<UserDocument>(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		avatar: { type: String, default: "" },
		role: { type: String, enum: Object.values(Role), default: Role.Candidate },
	},
	{ timestamps: true }
);

userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
	const isMatch = await bcrypt.compare(password, this.password);
	return isMatch;
};

userSchema.methods.generateToken = function (): string {
	const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET as string, { expiresIn: "7d" });
	return token;
};

const User = models.User || model<UserDocument>("User", userSchema);

export default User;
