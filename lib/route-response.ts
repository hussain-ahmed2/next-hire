import { NextResponse } from "next/server";

type Data = {
	[key: string]: string | string[] | number | number[] | boolean | object | object[];
};

export const successResponse = (status: number = 200, message: string = "Success", data: Data = {}) => {
	return NextResponse.json({ success: true, message, data }, { status });
};

export const errorResponse = (status: number = 400, message: string = "Error", data: Data = {}) => {
	return NextResponse.json({ success: false, message, data }, { status });
};
