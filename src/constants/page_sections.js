export const page_sections = new Map(
  [
    {
      key: "guides",
      label: "Гайды",
      mainPage: "../index",
    },
    {
      key: "games",
      label: "Игры",
      mainPage: "roulette",
    },
  ].map((sectionBase) => [sectionBase.key, sectionBase])
);
