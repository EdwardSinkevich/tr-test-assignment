import Link from "next/link";

import { PAGES } from "@/constants/pages";
import { Navigation } from "./navigation/Navigation";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <Link href={PAGES.home.href}>
        <h1>Medal Count App</h1>
      </Link>
      <Navigation routes={Object.values(PAGES)} />
    </header>
  );
}
