import { useState } from "react";

const TilesDescription = function ({ company }) {
  const [expand, setExpand] = useState(true);
  if (!company) {
    return;
  }
  const brandDescriptions = {
    sonex:
      "Sonex, an esteemed Indian brand, specializes in the production of exceptional floor and wall tiles. Their tiles are crafted with meticulous attention to detail, utilizing state-of-the-art technology and premium materials. Offering a diverse range of designs, textures, and colors, Sonex tiles provide endless possibilities for creating stunning interiors. Renowned for their durability and longevity, these tiles are designed to withstand the test of time while adding a touch of elegance to any space. Choose Sonex tiles to elevate your floors and walls with quality craftsmanship and captivating aesthetics.",
    mozillaGranito:
      "Mozilla Granito tiles are a premium choice for flooring solutions, known for their exquisite craftsmanship and exceptional quality. These tiles are manufactured by Mozilla, a trusted brand renowned for its commitment to innovation and customer satisfaction. With a wide array of designs, patterns, and finishes, Mozilla Granito tiles offer versatility to suit various interior styles. Crafted with durable materials, these tiles are resistant to stains, scratches, and wear, ensuring long-lasting beauty. Whether for residential or commercial spaces, Mozilla Granito tiles provide a perfect blend of elegance, durability, and functionality, enhancing the visual appeal of any area.",
    spentagon:
      "Spentagon parking tiles are specialized tiles designed specifically for parking areas and driveways. These tiles are engineered to withstand heavy loads, constant vehicle traffic, and exposure to the elements. With their sturdy construction and superior strength, Spentagon parking tiles offer excellent durability and resistance to wear and tear. They come in a range of attractive designs and textures, providing both functionality and aesthetics. These tiles are slip-resistant, ensuring enhanced safety for vehicles and pedestrians. Whether for residential or commercial parking spaces, Spentagon parking tiles are a reliable choice to create durable, visually appealing, and efficient parking surfaces.",
    bravat:
      "Bravat double charged flooring tiles are a premium choice for creating elegant and durable floors. These tiles are manufactured using a specialized double charging process that ensures a high level of strength and longevity. The double charging technique involves fusing two layers of colored clay together, resulting in a tile with a vibrant, consistent color throughout its thickness. Bravat double charged flooring tiles are known for their excellent resistance to scratches, stains, and fading, making them ideal for high-traffic areas. With a wide range of designs, patterns, and finishes available, these tiles offer versatility and the ability to enhance any interior design scheme. Transform your floors with Bravat double charged flooring tiles and enjoy a perfect blend of aesthetics and durability.",
    parcos:
      "Parcos 2 x 2 tiles are a stylish and versatile flooring solution that adds a touch of elegance to any space. These tiles, measuring 2 feet by 2 feet, offer a larger format that creates a seamless and visually appealing look. Parcos tiles are crafted with meticulous attention to detail, using high-quality materials to ensure durability and longevity. With a wide range of designs, patterns, and finishes available, Parcos 2 x 2 tiles offer endless possibilities for creating unique and captivating floors. Whether it's for residential or commercial applications, Parcos 2 x 2 tiles provide a combination of sophistication, functionality, and easy installation for a truly remarkable flooring experience.",
    gujurathi:
      "Gujarati Tiles, a local brand from Gujarat, India, is synonymous with quality and craftsmanship in the tile industry. Proudly produced in Gujarat, known for its rich heritage of tile manufacturing, these tiles reflect the essence of the region's artistic traditions. Gujarati Tiles offer a wide range of options, including ceramic, porcelain, mosaic, and more, each showcasing exquisite designs and patterns inspired by the local culture and craftsmanship. With attention to detail and adherence to stringent quality standards, Gujarati Tiles ensure durability, functionality, and visual appeal. Whether it's for residential or commercial projects, choosing Gujarati Tiles brings the essence of Gujarat's artistic legacy to your space, transforming it into a unique and captivating environment.",
  };
  let content = "";

  if (company === "Mozilla Granito") content = brandDescriptions.mozillaGranito;
  else content = brandDescriptions[company];
  return (
    <li className={expand ? "has-child expand" : "has-child"}>
      <a
        className="icon-small"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setExpand((prev) => !prev);
        }}
      >
        Description
      </a>
      <div className="content">{content}</div>
    </li>
  );
};

export default TilesDescription;
