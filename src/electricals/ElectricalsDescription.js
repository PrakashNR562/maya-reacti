import { useState } from "react";

const ElectricalsDescription = function ({ company }) {
  const [expand, setExpand] = useState(true);
  if (!company) {
    return;
  }
  const brandDescriptions = {
    Havells:
      "Discover the perfect blend of style and performance with Havells fans and lights. Havells is a trusted brand known for its cutting-edge technology and superior craftsmanship. With a wide range of ceiling fans, pedestal fans, and table fans, Havells offers cooling solutions that combine powerful airflow with energy efficiency. When it comes to lighting, Havells lights offer stunning designs and exceptional brightness, whether it's LED bulbs, decorative lights, or stylish fixtures. With a focus on durability and innovation, Havells products are built to last and enhance the comfort and aesthetics of your space. Experience the unmatched quality and elegance of Havells fans and lights, and enjoy a refreshing breeze and brilliant illumination in your surroundings.",
    Philips:
      "Illuminate your space with the brilliance of Philips lights. Renowned for their exceptional quality and innovation, Philips offers a diverse range of lighting solutions that cater to every need. From energy-efficient LED bulbs to stylish and modern fixtures, Philips lights combine functionality with stunning aesthetics. Enjoy bright and reliable illumination that enhances the ambiance of any room. With a focus on durability and longevity, Philips lights are built to last, providing you with years of efficient lighting. Experience the unmatched performance and elegance of Philips lights, and transform your space into a haven of light and beauty.",
    VGuard:
      "V-Guard is an Indian brand that specializes in electrical appliances and consumer goods. Established in 1977, V-Guard has become a trusted name in the industry, offering a wide range of products such as voltage stabilizers, inverters, pumps, cables, and solar water heaters. The brand is known for its focus on innovation, quality, and customer satisfaction. V-Guard products are designed to meet the diverse needs of households, businesses, and industries, providing reliable and efficient solutions. With a strong presence in the Indian market, V-Guard continues to expand its product portfolio and maintain its position as a leading electrical brand.",
    Crompton:
      "Discover the epitome of cooling comfort with Crompton fans. Renowned for their superior craftsmanship and innovative designs, Crompton offers a wide range of fans that provide efficient and powerful airflow. Whether you're looking for ceiling fans, pedestal fans, or table fans, Crompton has you covered. With features like energy efficiency, silent operation, and durable build quality, Crompton fans deliver optimal performance and lasting reliability. Beat the heat and elevate your space with Crompton fans, the perfect blend of style and functionality. Experience cooling perfection with Crompton!",
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

export default ElectricalsDescription;
