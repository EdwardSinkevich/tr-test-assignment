type Page = {
  href: string;
  name: string;
};

export const PAGES: Record<string, Page> = {
  home: { href: "/", name: "Home" },
  results: { href: "/results", name: "Results" },
} as const;
