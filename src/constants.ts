import chroma from "chroma-js";

export const COLOR_LEVELS = [
  {
    "id": 1,
    "name": "Tier 1",
    "description": "The most iconic shades.",
    "colors": [
      {
        "hex": "#FF0000",
        "name": "Red"
      },
      {
        "hex": "#808080",
        "name": "Gray"
      },
      {
        "hex": "#FFC0CB",
        "name": "Pink"
      },
      {
        "hex": "#FFD700",
        "name": "Gold"
      },
      {
        "hex": "#00FFFF",
        "name": "Cyan"
      },
      {
        "hex": "#C0FF00",
        "name": "Lime"
      },
      {
        "hex": "#008080",
        "name": "Teal"
      },
      {
        "hex": "#0000FF",
        "name": "Blue"
      },
      {
        "hex": "#808000",
        "name": "Olive"
      },
      {
        "hex": "#993300",
        "name": "Brown"
      },
      {
        "hex": "#FFBF00",
        "name": "Amber"
      },
      {
        "hex": "#964B00",
        "name": "Brown"
      },
      {
        "hex": "#FF7F50",
        "name": "Coral"
      },
      {
        "hex": "#F5F5DC",
        "name": "Beige"
      },
      {
        "hex": "#C3B091",
        "name": "Khaki"
      },
      {
        "hex": "#FFFFF0",
        "name": "Ivory"
      },
      {
        "hex": "#00FF00",
        "name": "Green"
      },
      {
        "hex": "#007FFF",
        "name": "Azure"
      },
      {
        "hex": "#FFFFFF",
        "name": "White"
      },
      {
        "hex": "#000000",
        "name": "Black"
      },
      {
        "hex": "#800000",
        "name": "Maroon"
      },
      {
        "hex": "#800080",
        "name": "Purple"
      },
      {
        "hex": "#FFFF00",
        "name": "Yellow"
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
        "hex": "#C0C0C0",
        "name": "Silver"
      },
      {
        "hex": "#DC143C",
        "name": "Crimson"
      }
    ]
  },
  {
    "id": 2,
    "name": "Tier 2",
    "description": "Refining your color vocabulary.",
    "colors": [
      {
        "hex": "#40E0D0",
        "name": "Turquoise"
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
        "hex": "#D2B48C",
        "name": "Tan"
      },
      {
        "hex": "#353839",
        "name": "Onyx"
      },
      {
        "hex": "#683068",
        "name": "Finn"
      },
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
        "hex": "#E0AB76",
        "name": "Buff"
      },
      {
        "hex": "#CDB280",
        "name": "Ecru"
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
      },
      {
        "hex": "#00A86B",
        "name": "Jade"
      },
      {
        "hex": "#3EB489",
        "name": "Mint"
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
      }
    ]
  },
  {
    "id": 3,
    "name": "Tier 3",
    "description": "Refining your color vocabulary.",
    "colors": [
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
      },
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
        "hex": "#FFE5B4",
        "name": "Peach"
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
      },
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
      }
    ]
  },
  {
    "id": 4,
    "name": "Tier 4",
    "description": "Refining your color vocabulary.",
    "colors": [
      {
        "hex": "#DE5D83",
        "name": "Blush"
      },
      {
        "hex": "#FFCBA4",
        "name": "Peach"
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
      },
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
        "hex": "#FA8072",
        "name": "Salmon"
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
      },
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
      }
    ]
  },
  {
    "id": 5,
    "name": "Tier 5",
    "description": "Refining your color vocabulary.",
    "colors": [
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
      },
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
      },
      {
        "hex": "#A45A52",
        "name": "Redwood"
      },
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
        "hex": "#F4C431",
        "name": "Saffron"
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
      }
    ]
  },
  {
    "id": 6,
    "name": "Tier 6",
    "description": "Refining your color vocabulary.",
    "colors": [
      {
        "hex": "#50C878",
        "name": "Emerald"
      },
      {
        "hex": "#9AB973",
        "name": "Olivine"
      },
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
      },
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
      },
      {
        "hex": "#8D029B",
        "name": "Mauveine"
      }
    ]
  },
  {
    "id": 7,
    "name": "Tier 7",
    "description": "Refining your color vocabulary.",
    "colors": [
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
      },
      {
        "hex": "#4D5D53",
        "name": "Feldgrau"
      },
      {
        "hex": "#36454F",
        "name": "Charcoal"
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
      },
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
      }
    ]
  },
  {
    "id": 8,
    "name": "Tier 8",
    "description": "Refining your color vocabulary.",
    "colors": [
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
      },
      {
        "hex": "#00FFBF",
        "name": "Aquamarine"
      },
      {
        "hex": "#80FF00",
        "name": "Chartreuse"
      },
      {
        "hex": "#7FFFD4",
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
      },
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
      }
    ]
  },
  {
    "id": 9,
    "name": "Tier 9",
    "description": "Refining your color vocabulary.",
    "colors": [
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
      },
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
      },
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
      }
    ]
  },
  {
    "id": 10,
    "name": "Tier 10",
    "description": "Refining your color vocabulary.",
    "colors": [
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
      },
      {
        "hex": "#00356B",
        "name": "Yale Blue"
      },
      {
        "hex": "#FF66CC",
        "name": "Rose Pink"
      },
      {
        "hex": "#FF1493",
        "name": "Deep Pink"
      },
      {
        "hex": "#FFDAE9",
        "name": "Mimi Pink"
      },
      {
        "hex": "#8C92AC",
        "name": "Cool Gray"
      },
      {
        "hex": "#4B3621",
        "name": "Café Noir"
      },
      {
        "hex": "#674846",
        "name": "Rose Ebony"
      },
      {
        "hex": "#708090",
        "name": "Slate Gray"
      },
      {
        "hex": "#841617",
        "name": "Ou Crimson"
      },
      {
        "hex": "#880085",
        "name": "Mardi Gras"
      },
      {
        "hex": "#F88379",
        "name": "Coral Pink"
      },
      {
        "hex": "#B22222",
        "name": "Fire Brick"
      },
      {
        "hex": "#CD5C5C",
        "name": "Indian Red"
      },
      {
        "hex": "#FFE4E1",
        "name": "Misty Rose"
      },
      {
        "hex": "#ED1B24",
        "name": "Red (cmyk)"
      },
      {
        "hex": "#905D5D",
        "name": "Rose Taupe"
      },
      {
        "hex": "#BC8F8F",
        "name": "Rosy Brown"
      },
      {
        "hex": "#A91101",
        "name": "Turkey Red"
      },
      {
        "hex": "#3D0C02",
        "name": "Black Bean"
      },
      {
        "hex": "#6C541E",
        "name": "Field Drab"
      },
      {
        "hex": "#59260B",
        "name": "Seal Brown"
      },
      {
        "hex": "#E3FF00",
        "name": "Lemon Lime"
      }
    ]
  },
  {
    "id": 11,
    "name": "Tier 11",
    "description": "Refining your color vocabulary.",
    "colors": [
      {
        "hex": "#013220",
        "name": "Dark Green"
      },
      {
        "hex": "#4F7942",
        "name": "Fern Green"
      },
      {
        "hex": "#7CFC00",
        "name": "Lawn Green"
      },
      {
        "hex": "#32CD32",
        "name": "Lime Green"
      },
      {
        "hex": "#8A9A5B",
        "name": "Moss Green"
      },
      {
        "hex": "#39FF14",
        "name": "Neon Green"
      },
      {
        "hex": "#01796F",
        "name": "Pine Green"
      },
      {
        "hex": "#A7FC00",
        "name": "Spring Bud"
      },
      {
        "hex": "#F0F8FF",
        "name": "Alice Blue"
      },
      {
        "hex": "#0D98BA",
        "name": "Blue Green"
      },
      {
        "hex": "#E0FFFF",
        "name": "Light Cyan"
      },
      {
        "hex": "#DFFFFD",
        "name": "Mint Green"
      },
      {
        "hex": "#0095B6",
        "name": "Bondi Blue"
      },
      {
        "hex": "#1F305E",
        "name": "Delft Blue"
      },
      {
        "hex": "#1164B4",
        "name": "Green Blue"
      },
      {
        "hex": "#00416A",
        "name": "Indigo Dye"
      },
      {
        "hex": "#8AB9F1",
        "name": "Jordy Blue"
      },
      {
        "hex": "#ADD8E6",
        "name": "Light Blue"
      },
      {
        "hex": "#0087BD",
        "name": "Blue (ncs)"
      },
      {
        "hex": "#87D3F8",
        "name": "Pale Azure"
      },
      {
        "hex": "#76ABDF",
        "name": "Ruddy Blue"
      },
      {
        "hex": "#4B61D1",
        "name": "Savoy Blue"
      },
      {
        "hex": "#4682B4",
        "name": "Steel Blue"
      },
      {
        "hex": "#3E8EDE",
        "name": "Tufts Blue"
      },
      {
        "hex": "#7C9ED9",
        "name": "Vista Blue"
      },
      {
        "hex": "#2E5090",
        "name": "Yinmn Blue"
      },
      {
        "hex": "#F2C1D1",
        "name": "Fairy Tale"
      }
    ]
  },
  {
    "id": 12,
    "name": "Tier 12",
    "description": "Refining your color vocabulary.",
    "colors": [
      {
        "hex": "#DDA0DD",
        "name": "Plum (web)"
      },
      {
        "hex": "#C71585",
        "name": "Red Violet"
      },
      {
        "hex": "#6A5ACD",
        "name": "Slate Blue"
      },
      {
        "hex": "#CC33CC",
        "name": "Steel Pink"
      },
      {
        "hex": "#A8516E",
        "name": "China Rose"
      },
      {
        "hex": "#F5FFFA",
        "name": "Mint Cream"
      },
      {
        "hex": "#91A3B0",
        "name": "Cadet Gray"
      },
      {
        "hex": "#8B8589",
        "name": "Taupe Gray"
      },
      {
        "hex": "#010B13",
        "name": "Rich Black"
      },
      {
        "hex": "#138808",
        "name": "India Green"
      },
      {
        "hex": "#301934",
        "name": "Dark Purple"
      },
      {
        "hex": "#555555",
        "name": "Davy's Gray"
      },
      {
        "hex": "#B31B1B",
        "name": "Cornell Red"
      },
      {
        "hex": "#F08080",
        "name": "Light Coral"
      },
      {
        "hex": "#CC3333",
        "name": "Persian Red"
      },
      {
        "hex": "#FF91A4",
        "name": "Salmon Pink"
      },
      {
        "hex": "#FFA000",
        "name": "Orange Peel"
      },
      {
        "hex": "#FFEFD5",
        "name": "Papaya Whip"
      },
      {
        "hex": "#B56917",
        "name": "Tiger’s Eye"
      },
      {
        "hex": "#3B3C36",
        "name": "Black Olive"
      },
      {
        "hex": "#AF6E4D",
        "name": "Brown Sugar"
      },
      {
        "hex": "#8A3324",
        "name": "Burnt Umber"
      },
      {
        "hex": "#D2691E",
        "name": "Cocoa Brown"
      },
      {
        "hex": "#F4A460",
        "name": "Sandy Brown"
      },
      {
        "hex": "#8DB600",
        "name": "Apple Green"
      },
      {
        "hex": "#4CBB17",
        "name": "Kelly Green"
      },
      {
        "hex": "#90EE90",
        "name": "Light Green"
      }
    ]
  },
  {
    "id": 13,
    "name": "Tier 13",
    "description": "Refining your color vocabulary.",
    "colors": [
      {
        "hex": "#55DD33",
        "name": "Sgbus Green"
      },
      {
        "hex": "#F0FFFF",
        "name": "Azure (web)"
      },
      {
        "hex": "#246BCE",
        "name": "Celtic Blue"
      },
      {
        "hex": "#0047AB",
        "name": "Cobalt Blue"
      },
      {
        "hex": "#1E90FF",
        "name": "Dodger Blue"
      },
      {
        "hex": "#0072BB",
        "name": "French Blue"
      },
      {
        "hex": "#2B4593",
        "name": "Marian Blue"
      },
      {
        "hex": "#0000CD",
        "name": "Medium Blue"
      },
      {
        "hex": "#002147",
        "name": "Oxford Blue"
      },
      {
        "hex": "#45B1E8",
        "name": "Picton Blue"
      },
      {
        "hex": "#9EB9D4",
        "name": "Powder Blue"
      },
      {
        "hex": "#1E2952",
        "name": "Space Cadet"
      },
      {
        "hex": "#324AB2",
        "name": "Violet Blue"
      },
      {
        "hex": "#8A2BE2",
        "name": "Blue Violet"
      },
      {
        "hex": "#9400D3",
        "name": "Dark Violet"
      },
      {
        "hex": "#FAE6FA",
        "name": "Pale Purple"
      },
      {
        "hex": "#FF1DCE",
        "name": "Hot Magenta"
      },
      {
        "hex": "#CA1F7B",
        "name": "Magenta Dye"
      },
      {
        "hex": "#AA98A9",
        "name": "Rose Quartz"
      },
      {
        "hex": "#CF71AF",
        "name": "Sky Magenta"
      },
      {
        "hex": "#F64A8A",
        "name": "French Rose"
      },
      {
        "hex": "#FF00CC",
        "name": "Hot Magenta"
      },
      {
        "hex": "#F2BDCD",
        "name": "Orchid Pink"
      },
      {
        "hex": "#F9429E",
        "name": "Rose Bonbon"
      },
      {
        "hex": "#FEFEFA",
        "name": "Baby Powder"
      },
      {
        "hex": "#EFDFBB",
        "name": "Dutch White"
      },
      {
        "hex": "#F8F8FF",
        "name": "Ghost White"
      }
    ]
  },
  {
    "id": 14,
    "name": "Tier 14",
    "description": "Refining your color vocabulary.",
    "colors": [
      {
        "hex": "#F5F5F5",
        "name": "White Smoke"
      },
      {
        "hex": "#BEBFC5",
        "name": "French Gray"
      },
      {
        "hex": "#1B1B1B",
        "name": "Eerie Black"
      },
      {
        "hex": "#414A4C",
        "name": "Outer Space"
      },
      {
        "hex": "#100C08",
        "name": "Smoky Black"
      },
      {
        "hex": "#242124",
        "name": "Raisin Black"
      },
      {
        "hex": "#317873",
        "name": "Myrtle Green"
      },
      {
        "hex": "#536878",
        "name": "Payne's Gray"
      },
      {
        "hex": "#645394",
        "name": "Ultra Violet"
      },
      {
        "hex": "#996515",
        "name": "Golden Brown"
      },
      {
        "hex": "#ED2939",
        "name": "Imperial Red"
      },
      {
        "hex": "#C46210",
        "name": "Alloy Orange"
      },
      {
        "hex": "#BF5700",
        "name": "Burnt Orange"
      },
      {
        "hex": "#FED8B1",
        "name": "Light Orange"
      },
      {
        "hex": "#FFA500",
        "name": "Orange (web)"
      },
      {
        "hex": "#E97451",
        "name": "Burnt Sienna"
      },
      {
        "hex": "#E1A95F",
        "name": "Earth Yellow"
      },
      {
        "hex": "#DA9100",
        "name": "Harvest Gold"
      },
      {
        "hex": "#5C5248",
        "name": "Walnut Brown"
      },
      {
        "hex": "#FFF8E7",
        "name": "Cosmic Latte"
      },
      {
        "hex": "#E6A817",
        "name": "Harvest Gold"
      },
      {
        "hex": "#FFFFE0",
        "name": "Light Yellow"
      },
      {
        "hex": "#FFDEAD",
        "name": "Navajo White"
      },
      {
        "hex": "#FADFAD",
        "name": "Peach Yellow"
      },
      {
        "hex": "#66FF00",
        "name": "Bright Green"
      },
      {
        "hex": "#228B22",
        "name": "Forest Green"
      },
      {
        "hex": "#ADFF2F",
        "name": "Green Yellow"
      }
    ]
  },
  {
    "id": 15,
    "name": "Tier 15",
    "description": "Refining your color vocabulary.",
    "colors": [
      {
        "hex": "#355E3B",
        "name": "Hunter Green"
      },
      {
        "hex": "#29AB87",
        "name": "Jungle Green"
      },
      {
        "hex": "#008000",
        "name": "Office Green"
      },
      {
        "hex": "#6C7C59",
        "name": "Reseda Green"
      },
      {
        "hex": "#00FF7F",
        "name": "Spring Green"
      },
      {
        "hex": "#9ACD32",
        "name": "Yellow Green"
      },
      {
        "hex": "#1CA9C9",
        "name": "Pacific Cyan"
      },
      {
        "hex": "#00B7EB",
        "name": "Process Cyan"
      },
      {
        "hex": "#81D8D0",
        "name": "Tiffany Blue"
      },
      {
        "hex": "#16166B",
        "name": "Federal Blue"
      },
      {
        "hex": "#26619C",
        "name": "Lapis Lazuli"
      },
      {
        "hex": "#1C39BB",
        "name": "Persian Blue"
      },
      {
        "hex": "#000F89",
        "name": "Phthalo Blue"
      },
      {
        "hex": "#AFDBF5",
        "name": "Uranian Blue"
      },
      {
        "hex": "#D473D4",
        "name": "French Mauve"
      },
      {
        "hex": "#7851A9",
        "name": "Royal Purple"
      },
      {
        "hex": "#8B008B",
        "name": "Dark Magenta"
      },
      {
        "hex": "#9F4576",
        "name": "Magenta Haze"
      },
      {
        "hex": "#D71868",
        "name": "Dogwood Rose"
      },
      {
        "hex": "#C74375",
        "name": "Fuchsia Rose"
      },
      {
        "hex": "#E4007C",
        "name": "Mexican Pink"
      },
      {
        "hex": "#EDCDC2",
        "name": "Pale Dogwood"
      },
      {
        "hex": "#FE28A2",
        "name": "Persian Rose"
      },
      {
        "hex": "#F77FBE",
        "name": "Persian Pink"
      },
      {
        "hex": "#DE6FA1",
        "name": "Thulian Pink"
      },
      {
        "hex": "#FFFAF0",
        "name": "Floral White"
      },
      {
        "hex": "#191970",
        "name": "Midnight Blue"
      }
    ]
  },
  {
    "id": 16,
    "name": "Tier 16",
    "description": "Refining your color vocabulary.",
    "colors": [
      {
        "hex": "#592720",
        "name": "Caput Mortuum"
      },
      {
        "hex": "#EE204E",
        "name": "Red (crayola)"
      },
      {
        "hex": "#F2003C",
        "name": "Red (munsell)"
      },
      {
        "hex": "#ED2839",
        "name": "Red (pantone)"
      },
      {
        "hex": "#ED9121",
        "name": "Carrot Orange"
      },
      {
        "hex": "#FE5A1D",
        "name": "Giants Orange"
      },
      {
        "hex": "#FF7900",
        "name": "Safety Orange"
      },
      {
        "hex": "#FFFACD",
        "name": "Lemon Chiffon"
      },
      {
        "hex": "#FFC40C",
        "name": "Mikado Yellow"
      },
      {
        "hex": "#FADA5E",
        "name": "Naples Yellow"
      },
      {
        "hex": "#00A693",
        "name": "Persian Green"
      },
      {
        "hex": "#00A550",
        "name": "Pigment Green"
      },
      {
        "hex": "#7DF9FF",
        "name": "Electric Blue"
      },
      {
        "hex": "#003262",
        "name": "Berkeley Blue"
      },
      {
        "hex": "#0070FF",
        "name": "Brandeis Blue"
      },
      {
        "hex": "#7BAFD4",
        "name": "Carolina Blue"
      },
      {
        "hex": "#3B00DB",
        "name": "Chrysler Blue"
      },
      {
        "hex": "#B9D9EB",
        "name": "Columbia Blue"
      },
      {
        "hex": "#1034A6",
        "name": "Egyptian Blue"
      },
      {
        "hex": "#003153",
        "name": "Prussian Blue"
      },
      {
        "hex": "#0076B6",
        "name": "Honolulu Blue"
      },
      {
        "hex": "#8806CE",
        "name": "French Violet"
      },
      {
        "hex": "#DBB2D1",
        "name": "Pink Lavender"
      },
      {
        "hex": "#66023C",
        "name": "Tyrian Purple"
      },
      {
        "hex": "#FC0FC0",
        "name": "Shocking Pink"
      },
      {
        "hex": "#F19CBB",
        "name": "Amaranth Pink"
      },
      {
        "hex": "#FBAED2",
        "name": "Lavender Pink"
      }
    ]
  },
  {
    "id": 17,
    "name": "Tier 17",
    "description": "Refining your color vocabulary.",
    "colors": [
      {
        "hex": "#FAEBD7",
        "name": "Antique White"
      },
      {
        "hex": "#663399",
        "name": "Rebecca Purple"
      },
      {
        "hex": "#856088",
        "name": "Chinese Violet"
      },
      {
        "hex": "#E8AC41",
        "name": "Hunyadi Yellow"
      },
      {
        "hex": "#FF8000",
        "name": "Orange (wheel)"
      },
      {
        "hex": "#D99058",
        "name": "Persian Orange"
      },
      {
        "hex": "#E86100",
        "name": "Spanish Orange"
      },
      {
        "hex": "#E9D66B",
        "name": "Arylide Yellow"
      },
      {
        "hex": "#B8860B",
        "name": "Dark Goldenrod"
      },
      {
        "hex": "#49796B",
        "name": "Hooker's Green"
      },
      {
        "hex": "#004953",
        "name": "Midnight Green"
      },
      {
        "hex": "#00401A",
        "name": "Pakistan Green"
      },
      {
        "hex": "#009E60",
        "name": "Shamrock Green"
      },
      {
        "hex": "#3457D5",
        "name": "Byzantine Blue"
      },
      {
        "hex": "#85B09A",
        "name": "Cambridge Blue"
      },
      {
        "hex": "#4997D0",
        "name": "Celestial Blue"
      },
      {
        "hex": "#1F75FE",
        "name": "Blue (crayola)"
      },
      {
        "hex": "#6050DC",
        "name": "Majorelle Blue"
      },
      {
        "hex": "#0093AF",
        "name": "Blue (munsell)"
      },
      {
        "hex": "#B284BE",
        "name": "African Violet"
      },
      {
        "hex": "#563C5C",
        "name": "English Violet"
      },
      {
        "hex": "#FFF0F5",
        "name": "Lavender Blush"
      },
      {
        "hex": "#E6E6FA",
        "name": "Lavender (web)"
      },
      {
        "hex": "#32127A",
        "name": "Persian Indigo"
      },
      {
        "hex": "#32174D",
        "name": "Russian Violet"
      },
      {
        "hex": "#FF0090",
        "name": "Magenta (cmyk)"
      },
      {
        "hex": "#FE4EDA",
        "name": "Purple Pizzazz"
      }
    ]
  },
  {
    "id": 18,
    "name": "Tier 18",
    "description": "Refining your color vocabulary.",
    "colors": [
      {
        "hex": "#FFA6C9",
        "name": "Carnation Pink"
      },
      {
        "hex": "#F1DDCF",
        "name": "Champagne Pink"
      },
      {
        "hex": "#ED7A9B",
        "name": "Rose Pompadour"
      },
      {
        "hex": "#B3446C",
        "name": "Raspberry Rose"
      },
      {
        "hex": "#848482",
        "name": "Battleship Gray"
      },
      {
        "hex": "#AB274F",
        "name": "Amaranth Purple"
      },
      {
        "hex": "#D4AF37",
        "name": "Gold (metallic)"
      },
      {
        "hex": "#1B4D3E",
        "name": "Brunswick Green"
      },
      {
        "hex": "#00563B",
        "name": "Castleton Green"
      },
      {
        "hex": "#00693E",
        "name": "Dartmouth Green"
      },
      {
        "hex": "#76FF7A",
        "name": "Screamin' Green"
      },
      {
        "hex": "#6495ED",
        "name": "Cornflower Blue"
      },
      {
        "hex": "#6F00FF",
        "name": "Electric Indigo"
      },
      {
        "hex": "#273BE2",
        "name": "Palatinate Blue"
      },
      {
        "hex": "#224C98",
        "name": "Polynesian Blue"
      },
      {
        "hex": "#002387",
        "name": "Resolution Blue"
      },
      {
        "hex": "#BF00FF",
        "name": "Electric Purple"
      },
      {
        "hex": "#8F00FF",
        "name": "Electric Violet"
      },
      {
        "hex": "#5B3256",
        "name": "Japanese Violet"
      },
      {
        "hex": "#9683EC",
        "name": "Tropical Indigo"
      },
      {
        "hex": "#FDBCB4",
        "name": "Cantaloupe Melon"
      },
      {
        "hex": "#58111A",
        "name": "Chocolate Cosmos"
      },
      {
        "hex": "#FF4F00",
        "name": "Aerospace Orange"
      },
      {
        "hex": "#FF9966",
        "name": "Atomic Tangerine"
      },
      {
        "hex": "#FF7538",
        "name": "Orange (crayola)"
      },
      {
        "hex": "#FF5800",
        "name": "Orange (pantone)"
      },
      {
        "hex": "#FF8F00",
        "name": "Princeton Orange"
      }
    ]
  },
  {
    "id": 19,
    "name": "Tier 19",
    "description": "Refining your color vocabulary.",
    "colors": [
      {
        "hex": "#FFBA00",
        "name": "Selective Yellow"
      },
      {
        "hex": "#15F4EE",
        "name": "Fluorescent Cyan"
      },
      {
        "hex": "#6CB4EE",
        "name": "Argentinian Blue"
      },
      {
        "hex": "#468FEA",
        "name": "Chefchaouen Blue"
      },
      {
        "hex": "#997A8D",
        "name": "Mountbatten Pink"
      },
      {
        "hex": "#F400A1",
        "name": "Hollywood Cerise"
      },
      {
        "hex": "#F2F3F4",
        "name": "Anti-flash White"
      },
      {
        "hex": "#F7E7CE",
        "name": "Champagne (color)"
      },
      {
        "hex": "#006D6F",
        "name": "Caribbean Current"
      },
      {
        "hex": "#B57EDC",
        "name": "Lavender (floral)"
      },
      {
        "hex": "#FF91AF",
        "name": "Baker-miller Pink"
      },
      {
        "hex": "#F653A6",
        "name": "Magenta (crayola)"
      },
      {
        "hex": "#D0417E",
        "name": "Magenta (pantone)"
      },
      {
        "hex": "#BA160C",
        "name": "Engineering Orange"
      },
      {
        "hex": "#BF4F51",
        "name": "Bittersweet Shimmer"
      },
      {
        "hex": "#8E3A59",
        "name": "Quinacridone Magenta"
      },
      {
        "hex": "#FE0000",
        "name": "Off Red (rgb)"
      },
      {
        "hex": "#F4C2C2",
        "name": "Tea Rose (red)"
      },
      {
        "hex": "#1E4D2B",
        "name": "Cal Poly Green"
      },
      {
        "hex": "#00CCCC",
        "name": "Robin Egg Blue"
      },
      {
        "hex": "#00CCFF",
        "name": "Vivid Sky Blue"
      },
      {
        "hex": "#5D8AA8",
        "name": "Air Force Blue"
      },
      {
        "hex": "#318CE7",
        "name": "Bleu De France"
      },
      {
        "hex": "#87CEFA",
        "name": "Light Sky Blue"
      },
      {
        "hex": "#A4DDED",
        "name": "Non Photo Blue"
      },
      {
        "hex": "#86608E",
        "name": "Pomp And Power"
      },
      {
        "hex": "#FC89AC",
        "name": "Tickle Me Pink"
      }
    ]
  },
  {
    "id": 20,
    "name": "Tier 20",
    "description": "The most obscure designations.",
    "colors": [
      {
        "hex": "#FF0800",
        "name": "Candy Apple Red"
      },
      {
        "hex": "#CE2029",
        "name": "Fire Engine Red"
      },
      {
        "hex": "#4A412A",
        "name": "Drab Dark Brown"
      },
      {
        "hex": "#4A5D23",
        "name": "Dark Moss Green"
      },
      {
        "hex": "#20B2AA",
        "name": "Light Sea Green"
      },
      {
        "hex": "#2F4F4F",
        "name": "Dark Slate Gray"
      },
      {
        "hex": "#CBA135",
        "name": "Satin Sheen Gold"
      },
      {
        "hex": "#5D89BA",
        "name": "Silver Lake Blue"
      },
      {
        "hex": "#177245",
        "name": "Dark Spring Green"
      },
      {
        "hex": "#FF8C00",
        "name": "Dark Orange (web)"
      },
      {
        "hex": "#FFD800",
        "name": "School Bus Yellow"
      },
      {
        "hex": "#03C03C",
        "name": "Dark Pastel Green"
      },
      {
        "hex": "#7B68EE",
        "name": "Medium Slate Blue"
      },
      {
        "hex": "#F04A00",
        "name": "Golden Gate Bridge"
      },
      {
        "hex": "#FF33CC",
        "name": "Razzle Dazzle Rose"
      },
      {
        "hex": "#EE82EE",
        "name": "Violet (web Color)"
      },
      {
        "hex": "#D44500",
        "name": "Syracuse Red Orange"
      },
      {
        "hex": "#EDC9AF",
        "name": "Desert Sand (color)"
      },
      {
        "hex": "#4B92DB",
        "name": "United Nations Blue"
      },
      {
        "hex": "#FFB7C5",
        "name": "Cherry Blossom Pink"
      },
      {
        "hex": "#004225",
        "name": "British Racing Green"
      },
      {
        "hex": "#72A0C1",
        "name": "Air Superiority Blue"
      },
      {
        "hex": "#FB607F",
        "name": "Bright Pink (crayola)"
      },
      {
        "hex": "#FF6FFF",
        "name": "Shocking Pink (crayola)"
      },
      {
        "hex": "#002FA7",
        "name": "International Klein Blue"
      },
      {
        "hex": "#002366",
        "name": "Royal Blue (traditional)"
      },
      {
        "hex": "#4169E1",
        "name": "Royal Blue (web Color)"
      }
    ]
  }
];

export const ALL_COLORS = COLOR_LEVELS.flatMap(level => 
  level.colors.map(color => ({ ...color, level: level.id }))
);

export const getColorsByLevel = (maxLevel: number) => 
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
    let dH = Math.abs(target[2] - compare[2]);
    if (dH > 180) dH = 360 - dH;
    const dHNormalized = dH / 360;
    const distance = Math.sqrt(Math.pow(dL * W_L, 2) + Math.pow(dC * W_C, 2) + Math.pow(dHNormalized * W_H, 2));
    if (distance < minDistance) {
      minDistance = distance;
      closest = color;
    }
  }
  return closest;
};