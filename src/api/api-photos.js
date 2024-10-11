import axios from "axios";

//Application ID 662627
//Access Key YBzUbl2tTOkfgdGM9JSmQG1eK-anAa2YLCXfIO0kRZE
//Secret key TDLTj6b9jJFWzv_lYfHXPAwhzYHdN4cTQnZ8GykTOQ8

const ACCESS_KEY = "YBzUbl2tTOkfgdGM9JSmQG1eK-anAa2YLCXfIO0kRZE";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers = {
  Authorization: `Client-ID ${ACCESS_KEY}`,
  "Accept-Version": "v1",
};
axios.defaults.params = {
  per_page: 9,
  orientation: "landscape",
};

const fetchGalleryPhotos = async (query, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      page,
    },
  });

  return response.data;
};

export default fetchGalleryPhotos;
