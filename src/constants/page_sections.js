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
    {
      key: "commands",
      label: "Команды",
      mainPage: "commands",
    },
  ].map((sectionBase) => [sectionBase.key, sectionBase])
);
