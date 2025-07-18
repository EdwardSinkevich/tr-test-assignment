"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { MedalTableRow } from "./MedalTableRow";
import { MedalTableHeader } from "./MedalTableHeader";
import { Medals } from "@/types/models/medals";

type MedalTableProps = { data: Medals[] };

export function MedalTable({ data }: MedalTableProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sortChange = (sortType: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", sortType);
    router.push(`?${params.toString()}`);
  };

  return (
    <table>
      <MedalTableHeader onTitleClick={sortChange} />
      <tbody className="divide-y divide-gray-200">
        {data.map((item, index) => (
          <MedalTableRow
            key={item.countryCode}
            data={item}
            position={index + 1}
          />
        ))}
      </tbody>
    </table>
  );
}
