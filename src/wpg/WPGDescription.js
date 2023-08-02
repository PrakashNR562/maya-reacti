import { useState } from "react";

const WPGDescription = function ({ company }) {
  const [expand, setExpand] = useState(true);
  if (!company) {
    return;
  }
  const brandDescriptions = {
    asianPaints:
      "Asian Paints is a leading Indian multinational paint company known for its wide range of decorative and industrial paints. Established in 1942, it has grown to become one of the largest paint manufacturers in Asia. With a strong presence in over 15 countries, Asian Paints offers innovative paint solutions for homes, offices, and industries. The company is known for its focus on quality, sustainability, and customer satisfaction. Asian Paints continuously strives to introduce cutting-edge technologies and color trends, making it a trusted choice for customers seeking reliable and aesthetically pleasing paint products.",
    ardexEndura:
      "Ardex Endura is a renowned brand specializing in high-performance tiling and flooring solutions. With a rich history dating back over 60 years, Ardex Endura is known for its innovative and reliable products in the construction industry. Their offerings include tile adhesives, grouts, waterproofing systems, self-leveling compounds, and other surface preparation products. Ardex Endura's focus on quality, durability, and sustainability has earned them a strong reputation among professionals and contractors worldwide. They continue to push boundaries with advanced technologies, ensuring exceptional results and customer satisfaction in tiling and flooring projects.",
    DrFixit:
      "Dr Fixit is a trusted brand that specializes in waterproofing solutions for buildings and structures. With a legacy of over five decades, Dr Fixit offers a comprehensive range of products and systems to protect surfaces from water damage and seepage. Their solutions include waterproofing membranes, coatings, sealants, adhesives, grouts, and more. Dr Fixit is known for its cutting-edge research and development, ensuring advanced and reliable waterproofing solutions. The brand is widely recognized for its expertise, quality products, and commitment to providing effective and long-lasting waterproofing solutions for residential, commercial, and industrial applications.",
    Roff: "ROFF is a leading brand in the construction industry, specializing in cement-based products and solutions. ROFF offers a wide range of products for tile fixing, grouting, waterproofing, and surface treatment. Their products include tile adhesives, grouts, self-leveling compounds, sealants, primers, and more. ROFF is known for its focus on innovation, quality, and performance, catering to the needs of professional contractors, builders, and homeowners. With a strong emphasis on technical expertise and customer satisfaction, ROFF has established itself as a trusted brand in the market for reliable and efficient construction solutions.",
  };
  let content = "";

  if (company === "Asian-Paints") content = brandDescriptions.asianPaints;
  else if (company === "Ardex-Endura") content = brandDescriptions.ardexEndura;
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

export default WPGDescription;
