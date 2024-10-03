export const page_sections = new Map(
  [
    {
      key: "guides",
      label: "Гайды",
      // index.astro. Leave it as “../”
      mainPage: "../",
    },
    {
      key: "games",
      label: "Игры",
      mainPage: "roulette",
    },
  ].map((sectionBase) => [sectionBase.key, sectionBase])
);
