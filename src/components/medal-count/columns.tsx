import { JSX } from "react";

import {
  TableCountryFlagTemplate,
  TableMedalTemplate,
  TableTextTemplate,
} from "../TableTemplates";
import { Medals } from "@/types/models/medals";

export const columns: Array<{
  field: string;
  body: (data: Medals, position: number) => JSX.Element;
  title?: JSX.Element;
  isSortable?: boolean;
}> = [
  {
    field: "position",
    body: (_, position) => TableTextTemplate(position),
  },
  {
    field: "flag",
    body: ({ countryCode }) => TableCountryFlagTemplate(countryCode),
  },
  {
    field: "countryCode",
    body: ({ countryCode }) => TableTextTemplate(countryCode),
  },
  {
    field: "gold",
    body: ({ gold }) => TableTextTemplate(gold),
    title: TableMedalTemplate("bg-yellow-500"),
    isSortable: true,
  },
  {
    field: "silver",
    body: ({ silver }) => TableTextTemplate(silver),
    title: TableMedalTemplate("bg-gray-400"),
    isSortable: true,
  },
  {
    field: "bronze",
    body: ({ bronze }) => TableTextTemplate(bronze),
    title: TableMedalTemplate("bg-yellow-900"),
    isSortable: true,
  },
  {
    field: "total",
    body: ({ total }) => TableTextTemplate(total, "font-bold"),
    title: TableTextTemplate("TOTAL", "px-4 py-2"),
    isSortable: true,
  },
];
