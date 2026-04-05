export interface LearningLevel {
  id: number;
  name: string;
  description: string;
  colors: { name: string; hex: string }[];
}

export const COLOR_LEVELS: LearningLevel[] = [
  {
    id: 1,
    name: "The Basics",
    description: "Fundamental colors everyone knows.",
    colors: [
      { name: "Red", hex: "#FF0000" },
      { name: "Green", hex: "#008000" },
      { name: "Blue", hex: "#0000FF" },
      { name: "Yellow", hex: "#FFFF00" },
      { name: "Orange", hex: "#FFA500" },
      { name: "Purple", hex: "#800080" },
      { name: "Pink", hex: "#FFC0CB" },
      { name: "Brown", hex: "#A52A2A" },
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Gray", hex: "#808080" },
    ],
  },
  {
    id: 2,
    name: "Intermediate Spectrum",
    description: "Common secondary and distinct shades.",
    colors: [
      { name: "Cyan", hex: "#00FFFF" },
      { name: "Magenta", hex: "#FF00FF" },
      { name: "Lime", hex: "#00FF00" },
      { name: "Teal", hex: "#008080" },
      { name: "Indigo", hex: "#4B0082" },
      { name: "Violet", hex: "#EE82EE" },
      { name: "Maroon", hex: "#800000" },
      { name: "Navy", hex: "#000080" },
      { name: "Olive", hex: "#808000" },
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Gold", hex: "#FFD700" },
    ],
  },
  {
    id: 3,
    name: "Specific Shades",
    description: "More nuanced and artistic color names.",
    colors: [
      { name: "Turquoise", hex: "#40E0D0" },
      { name: "Lavender", hex: "#E6E6FA" },
      { name: "Coral", hex: "#FF7F50" },
      { name: "Peach", hex: "#FFDAB9" },
      { name: "Mint", hex: "#F5FFFA" },
      { name: "Crimson", hex: "#DC143C" },
      { name: "Amber", hex: "#FFBF00" },
      { name: "Azure", hex: "#F0FFFF" },
      { name: "Beige", hex: "#F5F5DC" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Ivory", hex: "#FFFFF0" },
      { name: "Khaki", hex: "#F0E68C" },
    ],
  },
  {
    id: 4,
    name: "Advanced Lexicon",
    description: "Highly specific and unique color designations.",
    colors: [
      { name: "Alabaster", hex: "#F2F0E6" },
      { name: "Aero", hex: "#7CB9E8" },
      { name: "Amaranth", hex: "#E52B50" },
      { name: "Celadon", hex: "#ACE1AF" },
      { name: "Cerulean", hex: "#007BA7" },
      { name: "Fallow", hex: "#C19A6B" },
      { name: "Glaucous", hex: "#6082B6" },
      { name: "Isabelline", hex: "#F4F0EC" },
      { name: "Lust", hex: "#E62020" },
      { name: "Mauve", hex: "#E0B0FF" },
      { name: "Ochre", hex: "#CC7722" },
      { name: "Pervenche", hex: "#CCCCFF" },
      { name: "Saffron", hex: "#F4C430" },
      { name: "Viridian", hex: "#40826D" },
      { name: "Zaffre", hex: "#0014A8" },
    ],
  },
];
