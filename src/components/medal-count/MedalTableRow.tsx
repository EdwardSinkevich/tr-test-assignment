import { Medals } from "@/types/models/medals";
import { columns } from "./columns";

type MedalTableRowProps = {
  position: number;
  data: Medals;
};

export function MedalTableRow({ data, position }: MedalTableRowProps) {
  return (
    <tr>
      {columns.map((column) => (
        <td key={column.field} className="px-4 py-2 text-center">
          {column.body(data, position)}
        </td>
      ))}
    </tr>
  );
}
