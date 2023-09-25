import connectMongoDB from "../../../lib/mongodb"
import { NextResponse } from "next/server"
import Topic from "../../../models/Topic"

export async function POST(request){
           const {title,description} = await request.json()
           await connectMongoDB();
           await Topic.create({title,description})
           return NextResponse.json({msg:"topic created"},{statuse:201})
}
export async function GET(request){
            await connectMongoDB();
            const  topics = await Topic.find()
            return NextResponse.json({topics})
}
export async function DELETE(request){
        const id = await request.nextUrl.searchParams.get("id");
        await connectMongoDB();
        await Topic.findByIdAndDelete(id);
        return  NextResponse.json({Message:"topic is delated successfully"},{status:200});
}
