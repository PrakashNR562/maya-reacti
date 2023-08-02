const dotenv = require("dotenv");
dotenv.config();

const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE_TILES);

exports.handler = async (event, context, cb) => {
  try {
    const response = await airtable.list({ maxRecords: 200 });
    const tiles = response.records.map((tile) => {
      const { id, fields } = tile;

      const {
        name,
        price,
        images,
        mrp,
        stock,
        stars,
        reviews,
        sold,
        company,
        category,
        material,
        size,
        // boxQuantity,
        type,
        color,
        family,
      } = fields;
      return {
        id,
        name,
        price,
        images,
        mrp,
        stock,
        stars,
        reviews,
        sold,
        company,
        category,
        material,
        size,
        // boxQuantity,
        type,
        color,
        family,
      };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(tiles),
    };
  } catch (error) {
    console.log(error.message);
    return {
      statusCode: 500,
      body: "There was an error",
    };
  }
};
