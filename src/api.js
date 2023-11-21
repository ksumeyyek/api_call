import axios from "axios";

const searchImages =async (term) => {
    //istek atma
    const response =await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID HTAd1lYEEmYgJ2cFaza192vq97NnhLBEbHHMWmdXsxw",
      },
      params: { query: term },
    });
    debugger;
    return response.data.results;
  };
  export default searchImages