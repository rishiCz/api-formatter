import { NextRequest, NextResponse } from "next/server";
import { ApiMap } from "../_mongoose/model/apiMap";
import { initMongoose } from "../_mongoose";

initMongoose;
const baseUri = process.env.BASE_URI;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const res = await ApiMap.create(body);
  return NextResponse.json({
    url: baseUri + "/api/callMap/" + res._id + (body.key ? "?key=" : ""),
  });
}
