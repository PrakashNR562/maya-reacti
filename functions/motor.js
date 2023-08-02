const dotenv = require("dotenv");
dotenv.config();

const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE_MOTOR);

exports.handler = async (event, context, cb) => {
  try {
    const response = await airtable.list({ maxRecords: 200 });
    const motors = response.records.map((motor) => {
      const { id, fields } = motor;

      const {
        name,
        images,
        category,
        company,
        capacity,
        stars,
        reviews,
        mrp,
        price,
        sold,
        information,
        typeWarranty,
      } = fields;
      return {
        id,
        name,
        images,
        category,
        company,
        capacity,
        stars,
        reviews,
        mrp,
        price,
        sold,
        information,
        typeWarranty,
      };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(motors),
    };
  } catch (error) {
    console.log(error.message);
    return {
      statusCode: 500,
      body: "There was an error",
    };
  }
};
