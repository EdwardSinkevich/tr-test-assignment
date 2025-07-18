import { NavigationItem, NavigationItemType } from "./NavigationItems";

type NavigationProps = {
  routes: NavigationItemType[];
};

export function Navigation({ routes }: NavigationProps) {
  return (
    <nav>
      <ul className="flex space-x-4">
        {routes.map((route) => (
          <NavigationItem key={route.href} item={route} isActive={false} />
        ))}
      </ul>
    </nav>
  );
}
