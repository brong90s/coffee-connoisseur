const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_KEY
);

const table = base("coffee-stores");

const getMnifiedRecord = (record) => {
  return {
    ...record.fields,
  };
};

const getMnifiedRecords = (records) => {
  return records.map((record) => getMnifiedRecord(record));
};

export {table, getMnifiedRecords}
