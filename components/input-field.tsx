import { HTMLInputTypeAttribute } from "react";

type InputFieldProps = {
	name: string;
	label?: string;
	type?: HTMLInputTypeAttribute;
	defaultValue?: string;
	error?: string;
	placeholder?: string;
};

export default function InputField({ name, label, type = "text", defaultValue = "", error = "", placeholder = "Type here" }: InputFieldProps) {
	return (
		<div className="flex flex-col">
			{label && (
				<label className="mb-1 font-medium" htmlFor={name}>
					{label}
				</label>
			)}
			<input
				className={`p-2 border border-purple-200 rounded outline-none focus:ring-2 transition duration-300 ${
					error ? "border-red-500 ring-red-200" : "focus:border-purple-500 ring-purple-200"
				}`}
				type={type}
				name={name}
				id={name}
				defaultValue={defaultValue}
				placeholder={placeholder}
			/>
			<div className="overflow-hidden mt-0.5">
				<p className={`text-red-500 text-sm transition-all duration-300 ${error ? "" : "opacity-0 h-0 translate-x-full"}`}>{error}</p>
			</div>
		</div>
	);
}
