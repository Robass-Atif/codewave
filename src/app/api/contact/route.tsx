import { NextResponse } from "next/server";
import Contact from "../../models/contact";
import connectDB from "../../lib/mongodb";

export async function POST(req: any) {
    const { name, email, comment } = await req.json();

    try {
        await connectDB();
        await Contact.create({ name, email, comment });

        return NextResponse.json({ msg: "Successfully loaded", success: true });
    } catch (error) {
        console.error("Error creating contact:", error);

        return NextResponse.json({ msg: "Failed to load", success: false });
    }
}
