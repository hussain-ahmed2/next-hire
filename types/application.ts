import { IJob } from "./job";
import { IUser } from "./user";

export enum ApplicationStatus {
	Pending = "pending",
	Reviewed = "reviewed",
	Interview = "interview",
	Rejected = "rejected",
	Hired = "hired",
}

export interface IApplication {
	_id?: string;
	candidate: string | IUser;
	job: string | IJob;
	resume: string;
	coverLetter?: string;
	status: ApplicationStatus;
	createdAt?: Date;
	updatedAt?: Date;
}
