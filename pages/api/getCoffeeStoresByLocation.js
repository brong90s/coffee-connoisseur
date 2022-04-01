import { fetchCoffeeStore } from "../../lib/coffee-store";

const getCoffeeStoresByLocation = async (req, res) => {
  // configure latLong and limit
  try {
    const { latLong, limit } = req.query;

    const response = await fetchCoffeeStore(latLong, limit);
    res.status(200)
    res.json(response)
  } catch (err) {
    res.status(500)
    res.json({message: 'Oh no! something went wrong', err})
  }
};

export default getCoffeeStoresByLocation;
