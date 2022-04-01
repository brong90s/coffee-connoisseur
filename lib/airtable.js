const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_KEY
);

const table = base("coffee-stores");

const getMnifiedRecord = (record) => {
  return {
    recordId: record.id,
    ...record.fields,
  };
};

const getMnifiedRecords = (records) => {
  return records.map((record) => getMnifiedRecord(record));
};

const findRecordByFilter = async (id) => {
  const findCoffeeStoreRecords = await table
    .select({
      filterByFormula: `id="${id}"`,
    })
    .firstPage();

  return getMnifiedRecords(findCoffeeStoreRecords);
};

export { table, getMnifiedRecords, findRecordByFilter };
