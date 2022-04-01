import {
  table,
  getMnifiedRecords,
  findRecordByFilter,
} from "../../lib/airtable";

const getCoffeeStoreById = async (req, res) => {
  const { id } = req.query;

  try {
    if (id) {
      const records = await findRecordByFilter(id);

      if (records.length !== 0) {
        res.json(records);
      } else {
        res.json({ message: `id could not be found` });
      }
    } else {
      res.status(400);
      res.json({ message: "id is missing" });
    }
  } catch (error) {
    res.status(500);
    res.json({ message: "Something went wrong", err });
  }
};

export default getCoffeeStoreById;
