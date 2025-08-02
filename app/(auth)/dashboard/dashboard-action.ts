"use server";

import connectDB from "@/lib/db";
import Application from "@/models/Application";
import Company from "@/models/Company";
import Job from "@/models/Job";
import User from "@/models/User";
import { Role } from "@/types/user";

export async function getTotalUsers() {
	try {
		await connectDB();
		const totalUsers: number = await User.countDocuments({});
		return totalUsers || 0;
	} catch (error) {
		console.error(error);
		return 0;
	}
}

export async function getTotalCompanies() {
	try {
		await connectDB();
		const totalCompanies: number = await Company.countDocuments({});
		return totalCompanies || 0;
	} catch (error) {
		console.error(error);
		return 0;
	}
}

export async function getTotalCandidates() {
	try {
		await connectDB();
		const totalCandidates: number = await User.countDocuments({ role: Role.Candidate });
		return totalCandidates || 0;
	} catch (error) {
		console.error(error);
		return 0;
	}
}

export async function getTotalEmployers() {
	try {
		await connectDB();
		const totalEmployers: number = await User.countDocuments({ role: Role.Employer });
		return totalEmployers || 0;
	} catch (error) {
		console.error(error);
		return 0;
	}
}

export async function getTotalJobs() {
	try {
		await connectDB();
		const totalJobs: number = await Job.countDocuments({});
		return totalJobs || 0;
	} catch (error) {
		console.error(error);
		return 0;
	}
}

export async function getTotalApplications() {
	try {
		await connectDB();
		const totalApplications: number = await Application.countDocuments({});
		return totalApplications || 0;
	} catch (error) {
		console.error(error);
		return 0;
	}
}
