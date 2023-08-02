import { useState } from "react";

const SanitaryDescription = function ({ company }) {
  const [expand, setExpand] = useState(true);
  if (!company) {
    return;
  }
  const brandDescriptions = {
    Everwin:
      "Everwin is an Indian company specializing in SS (stainless steel) towel rods and soap hangers. Using premium-grade materials such as SS-304, Everwin ensures the highest quality and durability in their products. The SS-304 grade stainless steel not only adds strength and longevity but also provides excellent resistance to corrosion and rust. Everwin's towel rods and soap hangers combine the reliability of SS-304 with elegant designs, offering customers both functionality and aesthetic appeal. Renowned for their commitment to quality, Everwin has become a trusted brand in India for SS-304 grade towel rods and soap hangers.",
    Aqutop:
      "Aqutop is a distinguished Indian brand hailing from Gujarat, specializing in the manufacturing of premium one-piece commodes, EWCs (European Water Closets), washbasins, and table tops. With a strong emphasis on quality and craftsmanship, Aqutop offers a wide range of bathroom fixtures that are both functional and aesthetically pleasing. Their one-piece commodes and EWCs are meticulously designed for optimal comfort and efficiency, providing a seamless and hygienic experience. Aqutop's washbasins and table tops showcase elegant designs and superior finishes, transforming bathrooms and living spaces into stylish sanctuaries. Known for their attention to detail and commitment to customer satisfaction, Aqutop has gained a solid reputation in the Indian market as a trusted provider of top-notch bathroom fixtures.",
    Parryware:
      "Parryware is a renowned brand that specializes in manufacturing high-quality bathroom fittings. With a rich heritage spanning over 60 years, Parryware has established itself as a trusted name in the industry. The company offers a wide range of products, including sanitaryware, faucets, showers, and accessories, known for their durability, functionality, and aesthetic appeal. Parryware combines innovation and design expertise to create bathroom solutions that cater to the diverse needs of customers. With a strong commitment to quality and customer satisfaction, Parryware has become a leading choice for homeowners, architects, and designers seeking reliable and stylish bathroom fittings.",
    EssEss:
      "Ess-Ess is a prominent brand that specializes in manufacturing bathroom fittings and fixtures. With a history spanning several decades, Ess-Ess has gained a strong foothold in the market. The company offers a diverse range of products including faucets, showers, sanitaryware, and allied accessories. Ess-Ess products are known for their superior quality, durability, and innovative designs. The brand focuses on providing functional and stylish solutions to meet the evolving needs of customers. With a strong commitment to customer satisfaction and a reputation for excellence, Ess-Ess has become a trusted name in the industry, catering to both residential and commercial sectors.",
    Polo: "Polo is a prominent brand specializing in the manufacturing of soap stands. With a focus on bathroom accessories, Polo has established itself as a trusted name in the market. The brand offers a wide range of soap stands known for their quality, functionality, and stylish designs. Polo soap stands are crafted using durable materials, ensuring long-lasting performance and resistance to moisture. Whether it's wall-mounted or freestanding, Polo soap stands provide convenient and hygienic storage solutions for keeping soap within easy reach. With their commitment to excellence and customer satisfaction, Polo has become a preferred choice for individuals seeking reliable and aesthetically pleasing soap stands.",
    Lifon:
      "Lifon is a reputable brand that specializes in the manufacturing of designer washbasins and table tops. With a focus on aesthetics and quality, Lifon offers a range of beautifully crafted products that add elegance and style to bathrooms and living spaces. Lifon's washbasins and table tops are designed with meticulous attention to detail, incorporating innovative designs and premium materials. The brand aims to create functional and visually appealing pieces that enhance the overall ambiance of any space. Lifon has gained recognition for its commitment to craftsmanship and its ability to provide unique and sophisticated options for customers seeking designer washbasins and table tops.",
    Cera: "Cera is a renowned brand that specializes in manufacturing bathroom fittings and fixtures. With a rich history and experience spanning over three decades, Cera has established itself as a trusted name in the industry. The brand offers a comprehensive range of products including sanitaryware, faucets, tiles, showers, wellness products, and allied accessories. Cera products are known for their exceptional quality, durability, and innovative designs. The brand combines functionality with style, offering a wide variety of options to suit different preferences and requirements. With a strong emphasis on customer satisfaction and a commitment to delivering excellence, Cera has become a preferred choice for homeowners, architects, and interior designers seeking top-notch bathroom fittings and fixtures.",
    Bathsense:
      "Bathsense is a well-known brand that specializes in providing bathroom accessories and products. With a focus on enhancing the functionality and aesthetics of bathrooms, Bathsense offers a wide range of items designed to create a comfortable and stylish bathing experience. The brand's product lineup includes shower curtains, bath mats, towel racks, soap dispensers, and other bathroom essentials. Bathsense products are known for their quality craftsmanship, durability, and attention to detail. Whether you're looking to update your bathroom decor or add practical elements, Bathsense offers a diverse selection of accessories to meet your needs. With a commitment to customer satisfaction and a reputation for reliable products, Bathsense has become a trusted choice for individuals seeking high-quality bathroom accessories.",
  };
  let content = "";

  if (company === "Bathsense(AsianPaints)")
    content = brandDescriptions.Bathsense;
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

export default SanitaryDescription;
