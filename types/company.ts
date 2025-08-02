import { IUser } from "./user";

export interface ICompany {
	_id?: string;
	slug: string;
	name: string;
	logo?: string;
	website?: string;
	industry?: string;
	description?: string;
	createdBy?: string | IUser;
	createdAt?: Date;
	updatedAt?: Date;
}
