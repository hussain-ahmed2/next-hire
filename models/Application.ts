import { ApplicationStatus, IApplication } from "@/types/application";
import mongoose from "mongoose";

export type ApplicationDocument = IApplication & mongoose.Document & {};

const applicationSchema = new mongoose.Schema<ApplicationDocument>({
	candidate: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
	job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
	resume: { type: String, required: true },
	coverLetter: { type: String },
	status: { type: String, enum: Object.values(ApplicationStatus), required: true, default: ApplicationStatus.Pending },
});

const Application = mongoose.models.Application || mongoose.model("Application", applicationSchema);
export default Application;
