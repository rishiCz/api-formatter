import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { ApiMap } from "../../_mongoose/model/apiMap";
import { initMongoose } from "../../_mongoose";

initMongoose;
const baseUri = process.env.BASE_URI;

export async function GET(req: NextRequest, context: any) {
  const { id } = context.params;
  const keys = req.nextUrl.searchParams.get("key");
  let res, url;
  try {
    const { valApi, key } = await ApiMap.findOne({ _id: id });
    if (key) url = createMetaUrlFromKeys(valApi, key, keys || "");
    else url = baseUri + valApi;
    res = await axios.get(url);
  } catch (error) {
    res = { error };
  }

  return NextResponse.json({ ...res.data });
}

function createMetaUrlFromKeys(url: string, key: string, keyString: string) {
  const keys = keyString.split(",")
  const urlList = keys.map((item) => {
    let tempUrl = url;
    return tempUrl.replace(key, item);
  });
  const urlString = urlList.join(",");
  return baseUri + "/api/allApi?q=" + urlString;
}
