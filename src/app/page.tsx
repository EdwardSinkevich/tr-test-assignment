import Link from "next/link";

import { PAGES } from "@/constants/pages";

export default function Home() {
  return <Link href={PAGES.results.href}>Show results</Link>;
}
