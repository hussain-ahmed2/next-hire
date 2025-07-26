export enum Role {
	Admin = "admin",
	Employer = "employer",
	Candidate = "candidate",
}

export interface IUser {
	name: string;
	email: string;
	password: string;
	avatar: string;
	role: Role;
	createdAt: Date;
	updatedAt: Date;
}
