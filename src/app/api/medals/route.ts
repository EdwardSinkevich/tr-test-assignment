import { NextResponse } from "next/server";

import medals from "@/data/medals.json";

export async function GET() {
  // Simulate a delay to mimic a real API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return NextResponse.json(medals);
}
