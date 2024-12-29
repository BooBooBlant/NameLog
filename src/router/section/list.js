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
    {
      key: "commands",
      label: "Команды",
      mainPage: "commands",
    },
  ].map((sectionBase) => [sectionBase.key, sectionBase])
);
