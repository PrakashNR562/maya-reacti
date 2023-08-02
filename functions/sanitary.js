const dotenv = require("dotenv");
dotenv.config();

const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE_SANITARY);

exports.handler = async (event, context, cb) => {
  try {
    const response = await airtable.list({ maxRecords: 200 });
    const sanitary_list = response.records.map((sanitary) => {
      const { id, fields } = sanitary;

      const {
        name,
        category,
        company,
        information,
        stars,
        reviews,
        color,
        mrp,
        discount,
        images,
        size,
        sold,
      } = fields;
      const price = Math.ceil(Number(mrp) * (1 - Number(discount) / 100));

      return {
        id,
        name,
        category,
        company,
        information,
        stars,
        reviews,
        color,
        mrp,
        discount,
        images,
        size,
        sold,
        price,
      };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(sanitary_list),
    };
  } catch (error) {
    console.log(error.message);
    return {
      statusCode: 500,
      body: "There was an error",
    };
  }
};
