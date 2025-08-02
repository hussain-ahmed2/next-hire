import { generateSlugForCompany } from "@/lib/slugify";
import { ICompany } from "@/types/company";
import mongoose from "mongoose";

export type CompanyDocument = ICompany & mongoose.Document & {};

const companySchema = new mongoose.Schema<ICompany>({
	slug: { type: String, unique: true, lowercase: true, trim: true, required: true },
	name: { type: String, required: true },
	logo: { type: String },
	website: { type: String },
	industry: { type: String },
	description: { type: String },
	createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	createdAt: { type: Date, default: Date.now },
});

companySchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("name")) {
		this.slug = await generateSlugForCompany(this.name);
	}
	next();
});

const Company = mongoose.models.Company || mongoose.model("Company", companySchema);
export default Company;
