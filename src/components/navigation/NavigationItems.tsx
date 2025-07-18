import Link from "next/link";

export type NavigationItemType = {
  href: string;
  name: string;
};

type NavigationItemProps = {
  item: NavigationItemType;
  isActive: boolean;
};

export function NavigationItem({ item, isActive }: NavigationItemProps) {
  return <Link href={item.href}>{item.name}</Link>;
}
