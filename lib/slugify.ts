import slugify from "slugify";
import connectDB from "./db";
import User from "@/models/User";
import Job from "@/models/Job";
import Company from "@/models/Company";

export async function generateSlugForUser(name: string) {
	try {
		let slug = slugify(name, { lower: true, strict: true, trim: true });
		let existingUser = await User.findOne({ slug });
		let i = 1;
		const baseSlug = slug;
		while (existingUser != null) {
			slug = `${baseSlug}-${i}`;
			existingUser = await User.findOne({ slug });
			i++;
		}
		return slug;
	} catch (error) {
		console.error(error);
		return "";
	}
}

export async function generateSlugForJob(title: string) {
	await connectDB();
	let slug = slugify(title, { lower: true, strict: true, trim: true });
	let existingJob = await Job.findOne({ slug });
	let i = 1;
	while (existingJob) {
		slug = `${slug}-${i}`;
		existingJob = await Job.findOne({ slug });
		i++;
	}
	return slug;
}

export async function generateSlugForCompany(name: string) {
	await connectDB();
	let slug = slugify(name, { lower: true, strict: true, trim: true });
	let existingCompany = await Company.findOne({ slug });
	let i = 1;
	while (existingCompany) {
		slug = `${slug}-${i}`;
		existingCompany = await Company.findOne({ slug });
		i++;
	}
	return slug;
}
