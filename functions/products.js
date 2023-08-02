const dotenv = require("dotenv");
dotenv.config();

const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE);

exports.handler = async (event, context, cb) => {
  try {
    const response = await airtable.list({ maxRecords: 200 });
    const products = response.records.map((product) => {
      const { id, fields } = product;

      const {
        properties,
        colors,
        stars,
        quantitysold,
        quantityAvailable,
        description,
        images,
        price,
        mrp,
        Name,
        category,
        reviews,
        featured,
      } = fields;
      return {
        id,
        properties,
        colors,
        stars,
        quantitysold,
        quantityAvailable,
        description,
        images,
        price,
        mrp,
        Name,
        category,
        reviews,
        featured,
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
