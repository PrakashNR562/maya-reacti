import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

export const products_url = "/.netlify/functions/products";
export const tiles_url = "/.netlify/functions/tiles";
export const sanitary_url = "/.netlify/functions/sanitary";
export const wpg_url = "/.netlify/functions/water-proofing";
export const motor_url = "/.netlify/functions/motor";
export const electricals_url = "/.netlify/functions/electricals";

export const single_product_url = `/.netlify/functions/single-product?id=`;
export const single_tile_url = `/.netlify/functions/single-tile?id=`;
export const single_sanitary_url = `/.netlify/functions/single-sanitary?id=`;
export const single_wpg_url = `/.netlify/functions/single-wpg?id=`;
export const single_motor_url = `/.netlify/functions/single-motor?id=`;
export const single_electricals_url = `/.netlify/functions/single-electricals?id=`;
