import { MedalSorts } from "@/constants/medal-sorts";
import { Medals } from "@/types/models/medals";

export function sortMedals(medals: Medals[], sortBy: MedalSorts): Medals[] {
  return medals.sort((a, b) => {
    switch (sortBy) {
      case MedalSorts.GOLD: {
        const goldDiff = b.gold - a.gold;
        if (goldDiff !== 0) return goldDiff;

        const silverDiff = b.silver - a.silver;
        console.log(silverDiff, a, b);

        if (silverDiff !== 0) return silverDiff;

        const bronzeDiff = b.bronze - a.bronze;
        return bronzeDiff !== 0 ? bronzeDiff : b.total - a.total;
      }
      case MedalSorts.SILVER: {
        const silverDiff = b.silver - a.silver;
        if (silverDiff !== 0) return silverDiff;

        const goldDiff = b.gold - a.gold;
        if (goldDiff !== 0) return goldDiff;

        const bronzeDiff = b.bronze - a.bronze;
        return bronzeDiff !== 0 ? bronzeDiff : b.total - a.total;
      }
      case MedalSorts.BRONZE: {
        const bronzeDiff = b.bronze - a.bronze;
        if (bronzeDiff !== 0) return bronzeDiff;

        const goldDiff = b.gold - a.gold;
        if (goldDiff !== 0) return goldDiff;

        const silverDiff = b.silver - a.silver;
        return silverDiff !== 0 ? silverDiff : b.total - a.total;
      }
      case MedalSorts.TOTAL: {
        const totalDiff = b.total - a.total;
        if (totalDiff !== 0) return totalDiff;

        const goldDiff = b.gold - a.gold;
        if (goldDiff !== 0) return goldDiff;

        const silverDiff = b.silver - a.silver;
        if (silverDiff !== 0) return silverDiff;

        return b.bronze - a.bronze;
      }
    }
  });
}
