import { generateSlugForJob } from "@/lib/slugify";
import { IJob, JobType } from "@/types/job";
import mongoose from "mongoose";

export type JobDocument = IJob & mongoose.Document & {};

const jobSchema = new mongoose.Schema<JobDocument>(
	{
		title: { type: String, required: true },
		slug: { type: String, unique: true, lowercase: true, trim: true, required: true },
		description: { type: String, required: true },
		location: { type: String },
		type: { type: String, enum: Object.values(JobType), required: true, default: JobType.FullTime },
		salaryRange: { min: { type: Number, required: true }, max: { type: Number, required: true } },
		company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },
		postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
	},
	{ timestamps: true }
);

jobSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("title")) {
		this.slug = await generateSlugForJob(this.title);
	}
	next();
});

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);
export default Job;
