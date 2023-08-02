const dotenv = require("dotenv");
dotenv.config();

const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE_ELECTRICALS);

exports.handler = async (event, context, cb) => {
  try {
    const response = await airtable.list({ maxRecords: 200 });
    const electricals = response.records.map((motor) => {
      const { id, fields } = motor;

      const {
        name,
        images,
        information,
        category,
        company,
        colors,
        stars,
        reviews,
        mrp,
        price,
        sold,
        typeWarranty,
      } = fields;
      return {
        id,
        name,
        images,
        information,
        category,
        company,
        colors,
        stars,
        reviews,
        mrp,
        price,
        sold,
        typeWarranty,
      };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(electricals),
    };
  } catch (error) {
    console.log(error.message);
    return {
      statusCode: 500,
      body: "There was an error",
    };
  }
};
