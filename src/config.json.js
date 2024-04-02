export const config = {
  creditails: {
    SUPABASE_CLIENT_ID: process.env.SUPABASE_CLIENT_ID,
    SUPABASE_CLIENT_SECRET: process.env.SUPABASE_CLIENT_SECRET,
  },
  page: {
    nav: {
      routes: [
        { label: "Зоны приватов", id: "zones_privates" },
        { label: "Батарейки", id: "batareiki" },
        { label: "Кланы", id: "clans" },
        { label: "Помощь проекту", id: "project_help" },
        { label: "Спавн легенд/ультра бистов", id: "spawn_legend" },
        { label: "Цены на предметы", id: "prices_of_items" },
        { label: "Магазины и их валюта", id: "stores_and_value" },
        { label: "Покевикторина", id: "poke_question" },
        { label: "Измерения", id: "dimension" },
        { label: "Админы и Модеры", id: "harakteristika" },
        { label: "Полезное", id: "helpful" },
      ],
    },
  },
};
