import Image from "next/image";
import { clsx } from "clsx";

export const TableTextTemplate = (
  content: string | number,
  className?: string
) => {
  return <span className={className}>{content}</span>;
};

const FLAG_OFFSETS: Record<string, number> = {
  AUT: 0,
  BLR: 17,
  CAN: 34,
  CHN: 51,
  FRA: 68,
  GER: 85,
  ITA: 102,
  NED: 119,
  NOR: 136,
  RUS: 153,
  SUI: 170,
  SWE: 187,
  USA: 204,
};

export const TableCountryFlagTemplate = (countryCode: string) => {
  return (
    <div className="flex w-7 h-4">
      <Image
        src="/flags.png"
        alt="icons"
        width={28}
        height={221}
        className="object-cover"
        style={{ objectPosition: `0 -${FLAG_OFFSETS[countryCode]}px` }}
      />
    </div>
  );
};

export const TableMedalTemplate = (className: string) => {
  return <div className={clsx("w-5 h-5 rounded-full", className)} />;
};
