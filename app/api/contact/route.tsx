export const dynamic = "force-dynamic";

import ConnectMongo from "@/utils/connectMongo";
import contactModel from "@/models/contactModel";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    await ConnectMongo();

    const newContact = new contactModel({ name, email, message });
    await newContact.save();

    return Response.json(
      { message: "Contact message saved successfully." },
      { status: 201 }
    );
  } catch (error: any) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await ConnectMongo();
    const contacts = await contactModel.find({}).sort({ date: -1 });

    return Response.json(contacts);
  } catch (error: any) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}
