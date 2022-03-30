import { createApi } from "unsplash-js";

const unsplashApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
});

const getListOfCoffeeStorePhotos = async () => {
  const photosResponse = await unsplashApi.search.getPhotos({
    query: "coffee shop",
    page: 1,
    perPage: 40,
    color: "green",
    orientation: "portrait",
  });
  const unsplashResults = photosResponse.response.results;
  return unsplashResults.map((result) => result.urls["small"]);
};

export const fetchCoffeeStore = async (
  latLong = "11.562888,104.880375",
  limit = 8
) => {
  try {
    const photos = await getListOfCoffeeStorePhotos();
    let query = "coffee store";

    const options = {
      method: "GET",
      headers: {
        Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
      },
    };

    const response = await fetch(
      `https://api.foursquare.com/v3/places/nearby?ll=${latLong}&query=${query}&limit=${limit}`,
      options
    );
    const data = await response.json();

    return data.results?.map((venue, idx) => {
      return {
        id: venue.fsq_id,
        address: venue.location.formatted_address,
        name: venue.name,
        imgUrl: photos[idx],
      };
    });
  } catch (err) {
    if (
      !process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY ||
      !process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
    ) {
      console.log("🚨 Make sure to setup your API keys...");
    }
    console.log("Something went wrong fetching coffee store", err);
    return [];
  }
};
