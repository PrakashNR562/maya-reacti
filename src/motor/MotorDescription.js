import { useState } from "react";

const MotorDescription = function ({ company }) {
  const [expand, setExpand] = useState(true);
  if (!company) {
    return;
  }
  const brandDescriptions = {
    Suguna:
      "Suguna Motors is an Indian brand that specializes in electric motors and pumps. With a rich history spanning several decades, the company has established itself as a leading manufacturer in the industry. Suguna Motors offers a wide range of energy-efficient and reliable products for various applications, including agriculture, industrial, and domestic use. The brand is known for its innovative technologies, high-quality products, and a strong commitment to sustainability, making it a trusted choice for customers in India and beyond.",
    Sharp:
      "Sharp is a reputable company based in Tamil Nadu, India, with a rich history of manufacturing motors for several decades. Known for their exceptional quality, Sharp motors are crafted using 100% copper, ensuring durability and reliable performance. The company takes pride in offering a 1-year warranty on all its products. In the rare event of a motor malfunction within one year from the date of purchase, Sharp provides a hassle-free replacement, demonstrating their commitment to customer satisfaction and after-sales support.",
    VGuard:
      "V-Guard is an Indian brand that specializes in electrical appliances and consumer goods. Established in 1977, V-Guard has become a trusted name in the industry, offering a wide range of products such as voltage stabilizers, inverters, pumps, cables, and solar water heaters. The brand is known for its focus on innovation, quality, and customer satisfaction. V-Guard products are designed to meet the diverse needs of households, businesses, and industries, providing reliable and efficient solutions. With a strong presence in the Indian market, V-Guard continues to expand its product portfolio and maintain its position as a leading electrical brand.",
  };
  let content = "";

  if (company === "V Guard") content = brandDescriptions.VGuard;
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

export default MotorDescription;
