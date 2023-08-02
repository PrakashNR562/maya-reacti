const dotenv = require("dotenv");
dotenv.config();

const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE_WATERPROOFING);

exports.handler = async (event, context, cb) => {
  try {
    const response = await airtable.list({ maxRecords: 200 });
    const products = response.records.map((tile) => {
      const { id, fields } = tile;

      const {
        name,
        category,
        company,
        size,
        stars,
        reviews,
        color,
        mrp,
        discount,
        images,
        sold,
        information,
        price,
      } = fields;
      const priceArray = price
        .split(",")
        .map((ele) => Number(ele) * (1 - Number(discount) / 100));
      return {
        id,
        name,
        category,
        company,
        size,
        stars,
        reviews,
        color,
        mrp,
        discount,
        images,
        sold,
        information,
        priceArray,
      };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.log(error.message);
    return {
      statusCode: 500,
      body: "There was an error",
    };
  }
};
