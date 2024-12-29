import { Types } from "./enum.js";
export const pokemons_list = [
	{
		name: "Даркдевоир",

		picture: "/images/darkdevo.png",
		id: 1001,
		types: [Types.Fairy, Types.Dark],
		specs: {
			hp: {
				value: 85,
				min: 280,
				max: 374,
			},
			attack: {
				value: 80,
				min: 148,
				max: 284,
			},
			defence: {
				value: 75,
				min: 139,
				max: 273,
			},
			SP_attack: {
				value: 140,
				min: 256,
				max: 416,
			},
			SP_defence: {
				value: 85,
				min: 157,
				max: 295,
			},
			speed: {
				value: 135,
				min: 247,
				max: 405,
			},
		},

		height: 1.5,
		weight: 50.5,
		wayof: ["smth"],
		breeding: ["Невозможно"],
		location: ["???"],

		abilities: ["BadDreams", "Trace", "Pixilate"],

		types_multipliers: {
			Normal: null,
			Fire: null,
			Water: null,
			Electric: null,
			Grass: null,
			Ice: null,
			Fight: null,
			Poison: "x2",
			Groun: null,
			Flying: null,
			Psychic: 0,
			Bug: null,
			Rock: null,
			Ghost: 0.5,
			Drago: 0,
			Dark: 0.5,
			Steel: "x2",
			Fairy: "x2",
		},
	},
	{
		name: "Tsariani",

		picture: "/images/tsarianni.png",
		id: 1002,
		types: [Types.Grass, Types.Water],
		specs: {
			hp: {
				value: 130,
				min: 370,
				max: 464,
			},
			attack: {
				value: 140,
				min: 256,
				max: 416,
			},
			defence: {
				value: 140,
				min: 256,
				max: 416,
			},
			SP_attack: {
				value: 20,
				min: 40,
				max: 152,
			},
			SP_defence: {
				value: 130,
				min: 238,
				max: 394,
			},
			speed: {
				value: 70,
				min: 130,
				max: 262,
			},
		},

		height: 1.2,
		weight: 21.4,

		abilities: ["Merciless", "QueenlyMajesty", "Regenerator"],

		types_multipliers: {
			Normal: null,
			Fire: null,
			Water: 0.5,
			Electric: null,
			Grass: null,
			Ice: null,
			Fight: null,
			Poison: "x2",
			Groun: 0.5,
			Flying: "x2",
			Psychic: null,
			Bug: "x2",
			Rock: null,
			Ghost: null,
			Drago: null,
			Dark: null,
			Steel: 0.5,
			Fairy: null,
		},
	},
	{
		name: "Loviper",

		picture: "/images/loviper.png",
		id: 1003,
		types: [Types.Normal, Types.Poison],
		specs: {
			hp: {
				value: 90,
				min: 290,
				max: 384,
			},
			attack: {
				value: 185,
				min: 337,
				max: 515,
			},
			defence: {
				value: 75,
				min: 139,
				max: 273,
			},
			SP_attack: {
				value: 20,
				min: 40,
				max: 152,
			},
			SP_defence: {
				value: 75,
				min: 139,
				max: 273,
			},
			speed: {
				value: 185,
				min: 337,
				max: 515,
			},
		},

		height: 1.3,
		weight: 28.3,

		abilities: ["Scrappy", "Infiltrator", "ShedSkin"],

		types_multipliers: {
			Normal: null,
			Fire: null,
			Water: null,
			Electric: null,
			Grass: 0.5,
			Ice: null,
			Fight: null,
			Poison: 0.5,
			Groun: "x2",
			Flying: null,
			Psychic: "x2",
			Bug: 0.5,
			Rock: null,
			Ghost: 0,
			Drago: null,
			Dark: null,
			Steel: null,
			Fairy: 0.5,
		},
	},
	{
		name: "Voilur",

		picture: "/images/voilyre.png",
		id: 1004,
		types: [Types.Fire, Types.Fairy],
		specs: {
			hp: {
				value: 100,
				min: 310,
				max: 404,
			},
			attack: {
				value: 75,
				min: 139,
				max: 273,
			},
			defence: {
				value: 90,
				min: 166,
				max: 306,
			},
			SP_attack: {
				value: 145,
				min: 265,
				max: 427,
			},
			SP_defence: {
				value: 100,
				min: 184,
				max: 328,
			},
			speed: {
				value: 120,
				min: 220,
				max: 372,
			},
		},

		height: 1.6,
		weight: 50.5,

		abilities: ["FlashFire", "FlameBody", "Pixilate"],

		types_multipliers: {
			Normal: null,
			Fire: 0.5,
			Water: "x2",
			Electric: null,
			Grass: 0.5,
			Ice: 0.5,
			Fight: null,
			Poison: "x2",
			Groun: "x2",
			Flying: null,
			Psychic: null,
			Bug: 0.25,
			Rock: "x2",
			Ghost: null,
			Drago: 0,
			Dark: 0.5,
			Steel: null,
			Fairy: 0.5,
		},
	},
	{
		name: "Dragtaria",

		picture: "/images/dragtaria.png",
		id: 1005,
		types: [Types.Fairy, Types.Flying],
		specs: {
			hp: {
				value: 90,
				min: 290,
				max: 384,
			},
			attack: {
				value: 140,
				min: 256,
				max: 416,
			},
			defence: {
				value: 115,
				min: 211,
				max: 361,
			},
			SP_attack: {
				value: 120,
				min: 220,
				max: 372,
			},
			SP_defence: {
				value: 115,
				min: 211,
				max: 361,
			},
			speed: {
				value: 80,
				min: 148,
				max: 284,
			},
		},
		height: 1.6,
		weight: 25.5,

		abilities: ["Multiscale", "Pixilate", "NaturalCure"],

		types_multipliers: {
			Normal: null,
			Fire: null,
			Water: null,
			Electric: "x2",
			Grass: 0.5,
			Ice: "x2",
			Fight: 0.25,
			Poison: "x2",
			Groun: 0,
			Flying: null,
			Psychic: null,
			Bug: 0.25,
			Rock: "x2",
			Ghost: null,
			Drago: 0,
			Dark: 0.5,
			Steel: "x2",
			Fairy: null,
		},
	},
	{
		name: "Banblade",

		picture: "/images/banblayde.png",
		id: 1006,
		types: [Types.Steel, Types.Ghost],
		specs: {
			hp: {
				value: 75,
				min: 260,
				max: 354,
			},
			attack: {
				value: 160,
				min: 292,
				max: 460,
			},
			defence: {
				value: 135,
				min: 247,
				max: 405,
			},
			SP_attack: {
				value: 45,
				min: 85,
				max: 207,
			},
			SP_defence: {
				value: 135,
				min: 247,
				max: 405,
			},
			speed: {
				value: 25,
				min: 49,
				max: 163,
			},
		},

		height: 1.3,
		weight: 15,

		abilities: ["NoGuard", "CursedBody", "Prankster"],

		types_multipliers: {
			Normal: 0,
			Fire: "x2",
			Water: null,
			Electric: null,
			Grass: 0.5,
			Ice: 0.5,
			Fight: 0,
			Poison: 0,
			Groun: "x2",
			Flying: 0.5,
			Psychic: 0.5,
			Bug: 0.25,
			Rock: 0.5,
			Ghost: "x2",
			Drago: 0.5,
			Dark: "x2",
			Steel: 0.5,
			Fairy: 0.5,
		},
	},
	{
		name: "Milodeen",

		picture: "/images/mylodine.png",
		id: 1007,
		types: [Types.Water],
		specs: {
			hp: {
				value: 125,
				min: 360,
				max: 454,
			},
			attack: {
				value: 85,
				min: 157,
				max: 295,
			},
			defence: {
				value: 80,
				min: 148,
				max: 284,
			},
			SP_attack: {
				value: 120,
				min: 220,
				max: 372,
			},
			SP_defence: {
				value: 130,
				min: 238,
				max: 394,
			},
			speed: {
				value: 85,
				min: 157,
				max: 295,
			},
		},

		height: 6.2,
		weight: 150,

		abilities: ["LightningRod", "Competitive", "MarvelScale"],

		types_multipliers: {
			Normal: null,
			Fire: 0.5,
			Water: 0.5,
			Electric: "x2",
			Grass: "x2",
			Ice: 0.5,
			Fight: null,
			Poison: null,
			Groun: null,
			Flying: null,
			Psychic: null,
			Bug: null,
			Rock: null,
			Ghost: null,
			Drago: null,
			Dark: null,
			Steel: 0.5,
			Fairy: null,
		},
	},
	{
		name: "Bipoleon",

		picture: "/images/bipoleon.png",
		id: 1008,
		types: [Types.Water, Types.Steel],
		specs: {
			hp: {
				value: 85,
				min: 280,
				max: 374,
			},
			attack: {
				value: 145,
				min: 265,
				max: 427,
			},
			defence: {
				value: 130,
				min: 238,
				max: 394,
			},
			SP_attack: {
				value: 100,
				min: 184,
				max: 328,
			},
			SP_defence: {
				value: 110,
				min: 202,
				max: 350,
			},
			speed: {
				value: 50,
				min: 94,
				max: 218,
			},
		},

		height: 1.7,
		weight: 70,

		abilities: ["Defiant", "Torrent", "InnerFocus"],

		types_multipliers: {
			Normal: 0.5,
			Fire: null,
			Water: 0.5,
			Electric: "x2",
			Grass: null,
			Ice: 0.25,
			Fight: 0.5,
			Poison: 0,
			Groun: "x2",
			Flying: 0.5,
			Psychic: 0.5,
			Bug: 0.5,
			Rock: 0.5,
			Ghost: null,
			Drago: null,
			Dark: 0.5,
			Steel: 0.25,
			Fairy: 0.5,
		},
	},
	{
		name: "Luxvern",

		picture: "/images/luxvern.png",
		id: 1009,
		types: [Types.Electric, Types.Flying],
		specs: {
			hp: {
				value: 95,
				min: 300,
				max: 394,
			},
			attack: {
				value: 135,
				min: 247,
				max: 405,
			},
			defence: {
				value: 82,
				min: 152,
				max: 289,
			},
			SP_attack: {
				value: 91,
				min: 168,
				max: 309,
			},
			SP_defence: {
				value: 82,
				min: 152,
				max: 289,
			},
			speed: {
				value: 135,
				min: 247,
				max: 405,
			},
		},

		height: 1.5,
		weight: 73,

		abilities: ["Guts", "Frisk", "Intimidate"],

		types_multipliers: {
			Normal: null,
			Fire: null,
			Water: null,
			Electric: null,
			Grass: 0.5,
			Ice: "x2",
			Fight: 0.5,
			Poison: null,
			Groun: 0,
			Flying: 0.5,
			Psychic: null,
			Bug: 0.5,
			Rock: "x2",
			Ghost: null,
			Drago: null,
			Dark: null,
			Steel: 0.5,
			Fairy: null,
		},
	},
	{
		name: "Cosmochi",

		picture: "/images/cosmochi.png",
		id: 1010,
		types: [Types.Psychic, Types.Steel],
		specs: {
			hp: {
				value: 90,
				min: 290,
				max: 384,
			},
			attack: {
				value: 94,
				min: 173,
				max: 315,
			},
			defence: {
				value: 122,
				min: 224,
				max: 377,
			},
			SP_attack: {
				value: 100,
				min: 184,
				max: 328,
			},
			SP_defence: {
				value: 132,
				min: 242,
				max: 399,
			},
			speed: {
				value: 132,
				min: 242,
				max: 399,
			},
		},

		height: 1.0,
		weight: 5.0,

		abilities: ["SereneGrace", "Sturdy", "Unaware"],

		types_multipliers: {
			Normal: 0.5,
			Fire: "x2",
			Water: null,
			Electric: null,
			Grass: 0.5,
			Ice: 0.5,
			Fight: null,
			Poison: 0,
			Groun: "x2",
			Flying: 0.5,
			Psychic: 0.25,
			Bug: null,
			Rock: 0.5,
			Ghost: "x2",
			Drago: 0.5,
			Dark: "x2",
			Steel: 0.5,
			Fairy: 0.5,
		},
	},
];
