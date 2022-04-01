import {
  table,
  getMnifiedRecords,
  findRecordByFilter,
} from "../../lib/airtable";

const createCoffeeStore = async (req, res) => {
  if (req.method === "POST") {
    const { id, name, address, voting, imgUrl } = req.body;
    try {
      if (id) {
        // find a record
        const records = await findRecordByFilter(id);
        if (records.length !== 0) {
          res.json(records);
        } else {
          if (name) {
            // create a record
            const createRecords = await table.create([
              {
                fields: {
                  id,
                  name,
                  address,
                  voting: 0,
                  imgUrl,
                },
              },
            ]);
            const records = getMnifiedRecords(createRecords);
            res.json(records);
          } else {
            res.status(400);
            res.json({ message: "Name is missing" });
          }
        }
      } else {
        res.status(400);
        res.json({ message: "Id is missing" });
      }
    } catch (err) {
      res.status(500);
      res.json({ message: "Error finding or creating the store", err });
    }
  } else {
    res.json({ message: "method is GET" });
  }
};

export default createCoffeeStore;
