export enum Role {
	Admin = "admin",
	Employer = "employer",
	Candidate = "candidate",
}

export interface IUser {
	_id: string;
	slug: string;
	name: string;
	email: string;
	password: string;
	avatar?: string;
	role: Role;
	bio?: string;
	createdAt: Date;
	updatedAt: Date;
}
