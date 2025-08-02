import { ICompany } from "./company";
import { IUser } from "./user";

export enum JobType {
	FullTime = "Full Time",
	PartTime = "Part Time",
	Remote = "Remote",
	Internship = "Internship",
	Contract = "Contract",
}

export interface IJob {
	_id: string;
	title: string;
	slug: string;
	description: string;
	location?: string;
	type: JobType;
	salaryRange: {
		min: number;
		max: number;
	};
	company: string | ICompany;
	postedBy: string | IUser;
	createdAt: Date;
	updatedAt: Date;
}
