import chroma from "chroma-js";

export const COLOR_LEVELS = [
  {
    "id": 1,
    "name": "Tier 1",
    "description": "Curated selection for Tier 1",
    "colors": [
      {
        "hex": "#800080",
        "name": "Purple"
      },
      {
        "hex": "#808080",
        "name": "Gray"
      },
      {
        "hex": "#993300",
        "name": "Brown"
      },
      {
        "hex": "#FFC0CB",
        "name": "Pink"
      },
      {
        "hex": "#FF0000",
        "name": "Red"
      },
      {
        "hex": "#FFFF00",
        "name": "Yellow"
      },
      {
        "hex": "#00FF00",
        "name": "Green"
      },
      {
        "hex": "#0000FF",
        "name": "Blue"
      },
      {
        "hex": "#FFFFFF",
        "name": "White"
      },
      {
        "hex": "#00FFFF",
        "name": "Cyan"
      },
      {
        "hex": "#000000",
        "name": "Black"
      },
      {
        "hex": "#C0FF00",
        "name": "Lime"
      }
    ]
  },
  {
    "id": 2,
    "name": "Tier 2",
    "description": "Curated selection for Tier 2",
    "colors": [
      {
        "hex": "#808000",
        "name": "Olive"
      },
      {
        "hex": "#FFD700",
        "name": "Gold"
      },
      {
        "hex": "#F5F5DC",
        "name": "Beige"
      },
      {
        "hex": "#FFFFF0",
        "name": "Ivory"
      },
      {
        "hex": "#C0C0C0",
        "name": "Silver"
      },
      {
        "hex": "#800000",
        "name": "Maroon"
      },
      {
        "hex": "#008080",
        "name": "Teal"
      },
      {
        "hex": "#4B0082",
        "name": "Indigo"
      },
      {
        "hex": "#8000FF",
        "name": "Violet"
      },
      {
        "hex": "#DC143C",
        "name": "Crimson"
      },
      {
        "hex": "#FA8072",
        "name": "Salmon"
      },
      {
        "hex": "#FFBF00",
        "name": "Amber"
      }
    ]
  },
  {
    "id": 3,
    "name": "Tier 3",
    "description": "Curated selection for Tier 3",
    "colors": [
      {
        "hex": "#FF7F50",
        "name": "Coral"
      },
      {
        "hex": "#FFE5B4",
        "name": "Peach"
      },
      {
        "hex": "#C3B091",
        "name": "Khaki"
      },
      {
        "hex": "#D2B48C",
        "name": "Tan"
      },
      {
        "hex": "#3EB489",
        "name": "Mint"
      },
      {
        "hex": "#40E0D0",
        "name": "Turquoise"
      },
      {
        "hex": "#007FFF",
        "name": "Azure"
      },
      {
        "hex": "#36454F",
        "name": "Charcoal"
      },
      {
        "hex": "#343434",
        "name": "Jet"
      },
      {
        "hex": "#DAC8AE",
        "name": "Dun"
      },
      {
        "hex": "#353839",
        "name": "Onyx"
      },
      {
        "hex": "#683068",
        "name": "Finn"
      }
    ]
  },
  {
    "id": 4,
    "name": "Tier 4",
    "description": "Curated selection for Tier 4",
    "colors": [
      {
        "hex": "#E60026",
        "name": "Rojo"
      },
      {
        "hex": "#FF0080",
        "name": "Rose"
      },
      {
        "hex": "#B7410E",
        "name": "Rust"
      },
      {
        "hex": "#722F37",
        "name": "Wine"
      },
      {
        "hex": "#79443B",
        "name": "Bole"
      },
      {
        "hex": "#E3DAC9",
        "name": "Bone"
      },
      {
        "hex": "#DAA06D",
        "name": "Buff"
      },
      {
        "hex": "#C2B280",
        "name": "Ecru"
      },
      {
        "hex": "#E5AA70",
        "name": "Fawn"
      },
      {
        "hex": "#EEDC82",
        "name": "Flax"
      },
      {
        "hex": "#D1E231",
        "name": "Pear"
      },
      {
        "hex": "#00FF40",
        "name": "Erin"
      }
    ]
  },
  {
    "id": 5,
    "name": "Tier 5",
    "description": "Curated selection for Tier 5",
    "colors": [
      {
        "hex": "#00A86B",
        "name": "Jade"
      },
      {
        "hex": "#BCB88A",
        "name": "Sage"
      },
      {
        "hex": "#0FFFFF",
        "name": "Aqua"
      },
      {
        "hex": "#39A78D",
        "name": "Zomp"
      },
      {
        "hex": "#00B9E8",
        "name": "Aero"
      },
      {
        "hex": "#0070BB",
        "name": "Azul"
      },
      {
        "hex": "#5A4FCF",
        "name": "Iris"
      },
      {
        "hex": "#CC8899",
        "name": "Puce"
      },
      {
        "hex": "#8E4585",
        "name": "Plum"
      },
      {
        "hex": "#FFFAFA",
        "name": "Snow"
      },
      {
        "hex": "#111111",
        "name": "Night"
      },
      {
        "hex": "#635147",
        "name": "Umber"
      }
    ]
  },
  {
    "id": 6,
    "name": "Tier 6",
    "description": "Curated selection for Tier 6",
    "colors": [
      {
        "hex": "#645452",
        "name": "Wenge"
      },
      {
        "hex": "#704214",
        "name": "Sepia"
      },
      {
        "hex": "#FF004F",
        "name": "Folly"
      },
      {
        "hex": "#DC343B",
        "name": "Poppy"
      },
      {
        "hex": "#E25822",
        "name": "Flame"
      },
      {
        "hex": "#CD5700",
        "name": "Tawny"
      },
      {
        "hex": "#C19A6B",
        "name": "Camel"
      },
      {
        "hex": "#674C47",
        "name": "Liver"
      },
      {
        "hex": "#CC7722",
        "name": "Ochre"
      },
      {
        "hex": "#483C32",
        "name": "Taupe"
      },
      {
        "hex": "#F5DEB3",
        "name": "Wheat"
      },
      {
        "hex": "#FFFDD0",
        "name": "Cream"
      }
    ]
  },
  {
    "id": 7,
    "name": "Tier 7",
    "description": "Curated selection for Tier 7",
    "colors": [
      {
        "hex": "#FBEC5D",
        "name": "Maize"
      },
      {
        "hex": "#E4D96F",
        "name": "Straw"
      },
      {
        "hex": "#00BFFF",
        "name": "Capri"
      },
      {
        "hex": "#1560BD",
        "name": "Denim"
      },
      {
        "hex": "#6F2DA8",
        "name": "Grape"
      },
      {
        "hex": "#C8A2C8",
        "name": "Lilac"
      },
      {
        "hex": "#E0B0FF",
        "name": "Mauve"
      },
      {
        "hex": "#DF00FF",
        "name": "Phlox"
      },
      {
        "hex": "#DE5D83",
        "name": "Blush"
      },
      {
        "hex": "#FAF0E6",
        "name": "Linen"
      },
      {
        "hex": "#EAE0C8",
        "name": "Pearl"
      },
      {
        "hex": "#555D50",
        "name": "Ebony"
      }
    ]
  },
  {
    "id": 8,
    "name": "Tier 8",
    "description": "Curated selection for Tier 8",
    "colors": [
      {
        "hex": "#733635",
        "name": "Garnet"
      },
      {
        "hex": "#DE3163",
        "name": "Cerise"
      },
      {
        "hex": "#7F1734",
        "name": "Claret"
      },
      {
        "hex": "#D05340",
        "name": "Jasper"
      },
      {
        "hex": "#A50021",
        "name": "Madder"
      },
      {
        "hex": "#FF6347",
        "name": "Tomato"
      },
      {
        "hex": "#EFDECD",
        "name": "Almond"
      },
      {
        "hex": "#9F8170",
        "name": "Beaver"
      },
      {
        "hex": "#3D2B1F",
        "name": "Bistre"
      },
      {
        "hex": "#CD7F32",
        "name": "Bronze"
      },
      {
        "hex": "#DDD06A",
        "name": "Citron"
      },
      {
        "hex": "#6F4E37",
        "name": "Coffee"
      }
    ]
  },
  {
    "id": 9,
    "name": "Tier 9",
    "description": "Curated selection for Tier 9",
    "colors": [
      {
        "hex": "#B87333",
        "name": "Copper"
      },
      {
        "hex": "#81613E",
        "name": "Coyote"
      },
      {
        "hex": "#A81C07",
        "name": "Rufous"
      },
      {
        "hex": "#80461B",
        "name": "Russet"
      },
      {
        "hex": "#882D17",
        "name": "Sienna"
      },
      {
        "hex": "#FFEF00",
        "name": "Canary"
      },
      {
        "hex": "#FAD6A5",
        "name": "Sunset"
      },
      {
        "hex": "#74C365",
        "name": "Mantis"
      },
      {
        "hex": "#3AB09E",
        "name": "Keppel"
      },
      {
        "hex": "#0014A8",
        "name": "Zaffre"
      },
      {
        "hex": "#8B004B",
        "name": "Murrey"
      },
      {
        "hex": "#DA70D6",
        "name": "Orchid"
      }
    ]
  },
  {
    "id": 10,
    "name": "Tier 10",
    "description": "Curated selection for Tier 10",
    "colors": [
      {
        "hex": "#E9FFDB",
        "name": "Nyanza"
      },
      {
        "hex": "#568203",
        "name": "Avocado"
      },
      {
        "hex": "#960018",
        "name": "Carmine"
      },
      {
        "hex": "#AB4E52",
        "name": "Redwood"
      },
      {
        "hex": "#FF2400",
        "name": "Scarlet"
      },
      {
        "hex": "#FBCEB1",
        "name": "Apricot"
      },
      {
        "hex": "#FF7518",
        "name": "Pumpkin"
      },
      {
        "hex": "#F4C430",
        "name": "Saffron"
      },
      {
        "hex": "#F94D00",
        "name": "Tangelo"
      },
      {
        "hex": "#CC7F3B",
        "name": "Caramel"
      },
      {
        "hex": "#E48400",
        "name": "Fulvous"
      },
      {
        "hex": "#6B4423",
        "name": "Kobicha"
      }
    ]
  },
  {
    "id": 11,
    "name": "Tier 11",
    "description": "Curated selection for Tier 11",
    "colors": [
      {
        "hex": "#CB410B",
        "name": "Sinopia"
      },
      {
        "hex": "#E4D00A",
        "name": "Citrine"
      },
      {
        "hex": "#EF9B0F",
        "name": "Gamboge"
      },
      {
        "hex": "#F8DE7E",
        "name": "Jasmine"
      },
      {
        "hex": "#FACA16",
        "name": "Jonquil"
      },
      {
        "hex": "#E3F988",
        "name": "Mindaro"
      },
      {
        "hex": "#FFDB58",
        "name": "Mustard"
      },
      {
        "hex": "#FFCC33",
        "name": "Sunglow"
      },
      {
        "hex": "#F3E5AB",
        "name": "Vanilla"
      },
      {
        "hex": "#ACE1AF",
        "name": "Celadon"
      },
      {
        "hex": "#50C878",
        "name": "Emerald"
      },
      {
        "hex": "#9AB973",
        "name": "Olivine"
      }
    ]
  },
  {
    "id": 12,
    "name": "Tier 12",
    "description": "Curated selection for Tier 12",
    "colors": [
      {
        "hex": "#B2FFFF",
        "name": "Celeste"
      },
      {
        "hex": "#FF00FF",
        "name": "Fuchsia"
      },
      {
        "hex": "#D8BFD8",
        "name": "Thistle"
      },
      {
        "hex": "#F7F7F7",
        "name": "Seasalt"
      },
      {
        "hex": "#512888",
        "name": "Tekhelet"
      },
      {
        "hex": "#614051",
        "name": "Eggplant"
      },
      {
        "hex": "#800020",
        "name": "Burgundy"
      },
      {
        "hex": "#954535",
        "name": "Chestnut"
      },
      {
        "hex": "#C51E3A",
        "name": "Cardinal"
      },
      {
        "hex": "#E44D2E",
        "name": "Cinnabar"
      },
      {
        "hex": "#893F45",
        "name": "Cordovan"
      },
      {
        "hex": "#C04000",
        "name": "Mahogany"
      }
    ]
  },
  {
    "id": 13,
    "name": "Tier 13",
    "description": "Curated selection for Tier 13",
    "colors": [
      {
        "hex": "#65000B",
        "name": "Rosewood"
      },
      {
        "hex": "#F1B42F",
        "name": "Xanthous"
      },
      {
        "hex": "#FDEE00",
        "name": "Aureolin"
      },
      {
        "hex": "#FCF75E",
        "name": "Icterine"
      },
      {
        "hex": "#F0FFF0",
        "name": "Honeydew"
      },
      {
        "hex": "#40826D",
        "name": "Viridian"
      },
      {
        "hex": "#007BA7",
        "name": "Cerulean"
      },
      {
        "hex": "#6082B6",
        "name": "Glaucous"
      },
      {
        "hex": "#0F52BA",
        "name": "Sapphire"
      },
      {
        "hex": "#9966CC",
        "name": "Amethyst"
      },
      {
        "hex": "#6C3082",
        "name": "Eminence"
      },
      {
        "hex": "#B53389",
        "name": "Fandango"
      }
    ]
  },
  {
    "id": 14,
    "name": "Tier 14",
    "description": "Curated selection for Tier 14",
    "colors": [
      {
        "hex": "#8D029B",
        "name": "Mauveine"
      },
      {
        "hex": "#C54B8C",
        "name": "Mulberry"
      },
      {
        "hex": "#A020F0",
        "name": "Veronica"
      },
      {
        "hex": "#C9A0DC",
        "name": "Wisteria"
      },
      {
        "hex": "#E52B50",
        "name": "Amaranth"
      },
      {
        "hex": "#F56FA1",
        "name": "Cyclamen"
      },
      {
        "hex": "#FFF5EE",
        "name": "Seashell"
      },
      {
        "hex": "#FFF8DC",
        "name": "Cornsilk"
      },
      {
        "hex": "#F0EAD6",
        "name": "Eggshell"
      },
      {
        "hex": "#F8F4FF",
        "name": "Magnolia"
      },
      {
        "hex": "#E5E4E2",
        "name": "Platinum"
      },
      {
        "hex": "#2A3439",
        "name": "Gunmetal"
      }
    ]
  },
  {
    "id": 15,
    "name": "Tier 15",
    "description": "Curated selection for Tier 15",
    "colors": [
      {
        "hex": "#4D5D53",
        "name": "Feldgrau"
      },
      {
        "hex": "#1A1110",
        "name": "Licorice"
      },
      {
        "hex": "#702963",
        "name": "Byzantium"
      },
      {
        "hex": "#E34234",
        "name": "Vermilion"
      },
      {
        "hex": "#DAA520",
        "name": "Goldenrod"
      },
      {
        "hex": "#EC5800",
        "name": "Persimmon"
      },
      {
        "hex": "#F28500",
        "name": "Tangerine"
      },
      {
        "hex": "#A0785A",
        "name": "Chamoisee"
      },
      {
        "hex": "#7B3F00",
        "name": "Chocolate"
      },
      {
        "hex": "#7BA05B",
        "name": "Asparagus"
      },
      {
        "hex": "#3FFF00",
        "name": "Harlequin"
      },
      {
        "hex": "#0BDA51",
        "name": "Malachite"
      }
    ]
  },
  {
    "id": 16,
    "name": "Tier 16",
    "description": "Curated selection for Tier 16",
    "colors": [
      {
        "hex": "#93C572",
        "name": "Pistachio"
      },
      {
        "hex": "#3AA8C1",
        "name": "Moonstone"
      },
      {
        "hex": "#007A74",
        "name": "Skobeloff"
      },
      {
        "hex": "#43B3AE",
        "name": "Verdigris"
      },
      {
        "hex": "#9A4EAE",
        "name": "Purpureus"
      },
      {
        "hex": "#E30B5C",
        "name": "Raspberry"
      },
      {
        "hex": "#EDEAE0",
        "name": "Alabaster"
      },
      {
        "hex": "#F1E9D2",
        "name": "Parchment"
      },
      {
        "hex": "#98817B",
        "name": "Cinereous"
      },
      {
        "hex": "#682860",
        "name": "Palatinate"
      },
      {
        "hex": "#FF3800",
        "name": "Coquelicot"
      },
      {
        "hex": "#DFFF00",
        "name": "Chartreuse"
      }
    ]
  },
  {
    "id": 17,
    "name": "Tier 17",
    "description": "Curated selection for Tier 17",
    "colors": [
      {
        "hex": "#00FFBF",
        "name": "Aquamarine"
      },
      {
        "hex": "#CCCCFF",
        "name": "Periwinkle"
      },
      {
        "hex": "#DF73FF",
        "name": "Heliotrope"
      },
      {
        "hex": "#E3256B",
        "name": "Razzmatazz"
      },
      {
        "hex": "#F4F0EC",
        "name": "Isabelline"
      },
      {
        "hex": "#DBD7D2",
        "name": "Timberwolf"
      },
      {
        "hex": "#FE6F5E",
        "name": "Bittersweet"
      },
      {
        "hex": "#120A8F",
        "name": "Ultramarine"
      },
      {
        "hex": "#CF3476",
        "name": "Telemagenta"
      },
      {
        "hex": "#E09540",
        "name": "Butterscotch"
      },
      {
        "hex": "#696969",
        "name": "Dim Gray"
      },
      {
        "hex": "#801818",
        "name": "Falu Red"
      }
    ]
  },
  {
    "id": 18,
    "name": "Tier 18",
    "description": "Curated selection for Tier 18",
    "colors": [
      {
        "hex": "#990000",
        "name": "Penn Red"
      },
      {
        "hex": "#7C0902",
        "name": "Barn Red"
      },
      {
        "hex": "#8B0000",
        "name": "Dark Red"
      },
      {
        "hex": "#C08081",
        "name": "Old Rose"
      },
      {
        "hex": "#C21E56",
        "name": "Rose Red"
      },
      {
        "hex": "#44362F",
        "name": "Van Dyke"
      },
      {
        "hex": "#CFB53B",
        "name": "Old Gold"
      },
      {
        "hex": "#99FFFF",
        "name": "Ice Blue"
      },
      {
        "hex": "#87CEEB",
        "name": "Sky Blue"
      },
      {
        "hex": "#FF69B4",
        "name": "Hot Pink"
      },
      {
        "hex": "#FDF5E6",
        "name": "Old Lace"
      },
      {
        "hex": "#B2BEB5",
        "name": "Ash Gray"
      }
    ]
  },
  {
    "id": 19,
    "name": "Tier 19",
    "description": "Curated selection for Tier 19",
    "colors": [
      {
        "hex": "#660000",
        "name": "Blood Red"
      },
      {
        "hex": "#926644",
        "name": "Raw Umber"
      },
      {
        "hex": "#E23D28",
        "name": "Chili Red"
      },
      {
        "hex": "#FF7F7F",
        "name": "Light Red"
      },
      {
        "hex": "#A52A2A",
        "name": "Red Brown"
      },
      {
        "hex": "#C40234",
        "name": "Red (ncs)"
      },
      {
        "hex": "#DA2C43",
        "name": "Rusty Red"
      },
      {
        "hex": "#FF8200",
        "name": "Ut Orange"
      },
      {
        "hex": "#2E8B57",
        "name": "Sea Green"
      },
      {
        "hex": "#D0F0C0",
        "name": "Tea Green"
      },
      {
        "hex": "#008B8B",
        "name": "Dark Cyan"
      },
      {
        "hex": "#89CFF0",
        "name": "Baby Blue"
      }
    ]
  },
  {
    "id": 20,
    "name": "Tier 20",
    "description": "Curated selection for Tier 20",
    "colors": [
      {
        "hex": "#2072AF",
        "name": "Bice Blue"
      },
      {
        "hex": "#6699CC",
        "name": "Blue Gray"
      },
      {
        "hex": "#0000B8",
        "name": "Dark Blue"
      },
      {
        "hex": "#00009C",
        "name": "Duke Blue"
      },
      {
        "hex": "#73C2FB",
        "name": "Maya Blue"
      },
      {
        "hex": "#000080",
        "name": "Navy Blue"
      },
      {
        "hex": "#4666FF",
        "name": "Neon Blue"
      },
      {
        "hex": "#011F5B",
        "name": "Penn Blue"
      },
      {
        "hex": "#2454FF",
        "name": "Risd Blue"
      },
      {
        "hex": "#0059CF",
        "name": "Tang Blue"
      },
      {
        "hex": "#2D68C4",
        "name": "True Blue"
      },
      {
        "hex": "#2774AE",
        "name": "Ucla Blue"
      }
    ]
  }
];

export const ALL_COLORS = COLOR_LEVELS.flatMap(level => 
  level.colors.map(color => ({ ...color, level: level.id }))
);

export const getColorsByLevel = (level: number) => 
  ALL_COLORS.filter(color => color.level === level);

export const getAllColorsUpToLevel = (maxLevel: number) => 
  ALL_COLORS.filter(color => color.level <= maxLevel);

export const getClosestColor = (hex: string, dataset: { name: string; hex: string }[]) => {
  if (!dataset.length) return null;
  const target = (chroma as any)(hex).oklch();
  let closest = dataset[0];
  let minDistance = Number.MAX_VALUE;
  const W_L = 2.0; 
  const W_C = 1.0; 
  const W_H = 4.0; 
  for (const color of dataset) {
    const compare = (chroma as any)(color.hex).oklch();
    const dL = target[0] - compare[0];
    const dC = target[1] - compare[1];
    
    // Handle achromatic colors where hue is NaN in chroma-js
    let dH = 0;
    if (!isNaN(target[2]) && !isNaN(compare[2])) {
      dH = Math.abs(target[2] - compare[2]);
      if (dH > 180) dH = 360 - dH;
    }
    
    const dHNormalized = dH / 360;
    const distance = Math.sqrt(Math.pow(dL * W_L, 2) + Math.pow(dC * W_C, 2) + Math.pow(dHNormalized * W_H, 2));
    if (distance < minDistance) {
      minDistance = distance;
      closest = color;
    }
  }
  return closest;
};