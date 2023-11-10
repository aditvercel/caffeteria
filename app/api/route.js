import { connectToDB } from "@/utils/ConnectDB";

export async function GET(request) {
  connectToDB();
  return Response.json({ hi: "GET" });
}

export async function POST(request) {
  connectToDB();
  const res = await request.json();
  console.log(res);
  return Response.json(res);
}
