import { NextResponse } from "next/server";
type Data = {
  message: string;
};
export async function GET() {
  return NextResponse.json({
    message: "Hello from /api/hello! The Server is running smoothly!",
  });
}
