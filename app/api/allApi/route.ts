import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { ApiMap } from "../_mongoose/model/apiMap";
import { initMongoose } from "../_mongoose";

initMongoose
const baseUri = process.env.BASE_URI

export async function GET(req: NextRequest) {
  console.log(req.nextUrl)
  let data = null;
  let message = "SUCCESS";
  const q = req.nextUrl.searchParams.get("q");
  // check for &
  const allUrls = q?.split(",");
  const allPromises = [];
  if (allUrls != null) {
    for (let i = 0; i < allUrls.length; i++) {
      allPromises.push(axios.get(allUrls[i]));
    }
    try {
      const result = await Promise.all(allPromises);
      data = result.map((item) => item.data);
    } catch (error) {
      message = "ERROR";
      data = error;
      console.log("Error in api calls",req.nextUrl);
    }
  }

  return NextResponse.json({ message, allData: data });
}
// 
