import { GoCheck } from "react-icons/go";
import { routes } from "../../../routes";

export const shoppingList = [
  {
    icon: GoCheck,
    title: "3D PRINTER",
    description: "Here are some printers that we recommend.",
    list: [
      {
        name: "CR-10S",
        link: routes.LIST_CR10S,
      },
      {
        name: "Raise3D N2 Plus",
        link: routes.LIST_RAISE3D,
      },
    ],
  },
  {
    icon: GoCheck,
    title: "PLASTIC",
    description:
      "We like Hatchbox filament because of its quality and low cost, but any filament on Amazon with a 4 star rating from more than 10 people is probably fine.",
    list: [
      {
        name: "Hatchbox 1.75mm Black PLA Filament",
        link: routes.LIST_HATCHBOX_PLA,
      },
    ],
  },
  {
    icon: GoCheck,
    title: "TUNERS",
    description:
      "The Hovalin is designed specifically to these tuner dimensions, so please use them:",
    list: [
      {
        name: "Black",
        link: routes.LIST_TUNERS_BLACK,
      },
      {
        name: "Chrome",
        link: routes.LIST_TUNERS_CHROME,
      },
      {
        name: "Gold",
        link: routes.LIST_TUNERS_GOLD,
      },
    ],
  },
  {
    icon: GoCheck,
    title: "ROSIN",
    description:
      "Rosin helps to keep your violin from squeaking and keeps the bow on the strings.Here are a few brands of rosin that we suggest:",
    list: [
      {
        name: " Bellafina Rosin",
        link: routes.LIST_BELLAFINA_ROSIN,
      },
      {
        name: "Leto Rosin",
        link: routes.LIST_LETO_ROSIN,
      },
      {
        name: "Bernardel Rosin",
        link: routes.LIST_BERNARDEL_ROSIN,
      },
    ],
  },
  {
    icon: GoCheck,
    title: "STRINGS",
    description:
      "Strings can be expensive. We are fans of high value, low cost.Here are a few brands of strings that we endorse:",
    list: [
      {
        name: "D'Addario Prelude",
        link: routes.LIST_DADDARIO_PRELUDE,
      },
      {
        name: "D'Addario Helicore",
        link: routes.LIST_DADDARIO_HELICORE,
      },
      {
        name: "Thomastik Reds",
        link: routes.LIST_THOMASTIK_REDS,
      },
    ],
  },
  {
    icon: GoCheck,
    title: "CARBON FIBER RODS",
    description:
      "8mm (aka 5/16 inch) outer diameter by 500mm length carbon fiber rod. No cutting necessary",
    list: [
      {
        name: "8mm OD x 500mm length carbon fiber rod",
        link: routes.LIST_CF_ROD,
      },
    ],
  },
  {
    icon: GoCheck,
    title: "BOW",
    description:
      "Bows can also be expensive, we are fans of high value, low cost.Here are a few brands of bows that we support.",
    list: [
      {
        name: "ViolinSmart Violin Bow",
        link: routes.LIST_VIOLINSMART_BOW,
      },
      {
        name: "Balanced Brazilwood Bow",
        link: routes.LIST_BALANCED_BOW,
      },
      {
        name: "Carbon Fiber Violin Bow",
        link: routes.LIST_CF_BOW,
      },
    ],
  },
  {
    icon: GoCheck,
    title: "EXTRAS",
    description: "More stuff",
    list: [
      {
        name: "Fishman Pickup",
        link: routes.LIST_FISHMAN_PICKUP,
      },
      {
        name: "Socket wrench set",
        link: routes.LIST_SOCKET_WRENCH_SET,
      },
      {
        name: "Blue Tape",
        link: routes.LIST_BLUE_TAPE,
      },
      {
        name: "Print Removal Tools",
        link: routes.LIST_PRINT_SCRAPER,
      },
    ],
  },
];
