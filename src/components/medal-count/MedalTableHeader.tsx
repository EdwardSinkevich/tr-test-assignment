import { useState } from "react";
import { clsx } from "clsx";

import { columns } from "./columns";

type MedalTableHeaderProps = {
  onTitleClick: (field: string) => void;
};

export function MedalTableHeader({ onTitleClick }: MedalTableHeaderProps) {
  const [sortedField, setSortedField] = useState("");

  const handleTitleClick = (field: string) => {
    setSortedField(field);
    onTitleClick(field);
  };

  return (
    <thead>
      <tr className="bg-gray-200">
        {columns.map((column) => (
          <th
            key={column.field}
            onClick={() => column.isSortable && handleTitleClick(column.field)}
            className={clsx(
              "px-4 py-2",
              column.isSortable && "hover:cursor-pointer",
              column.field === sortedField &&
                "[box-shadow:inset_0_2px_0_0_black]"
            )}
          >
            {column.title}
          </th>
        ))}
      </tr>
    </thead>
  );
}
