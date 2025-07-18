import { MedalTable } from "@/components/medal-count/MedalTable";
import { MedalSorts } from "@/constants/medal-sorts";
import { apiFetch } from "@/lib/api";
import { sortMedals } from "@/lib/medals/sortMedals";
import { MedalsResponse } from "@/types/api/medals";

export default async function Results({
  searchParams,
}: {
  searchParams: Promise<{ sort?: MedalSorts }>;
}) {
  const { sort } = await searchParams;
  const data = await apiFetch<MedalsResponse>("/api/medals", {
    next: { revalidate: 300 },
  });

  const medalTableData = data.map((medal) => ({
    ...medal,
    countryCode: medal.code,
    total: medal.gold + medal.silver + medal.bronze,
  }));

  const sortedMedalTableData = sortMedals(
    medalTableData,
    sort || MedalSorts.GOLD
  );

  return <MedalTable data={sortedMedalTableData} />;
}
