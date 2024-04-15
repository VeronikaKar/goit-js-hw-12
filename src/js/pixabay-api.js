import axios from 'axios'
axios.defaults.pixaBay = "https://pixabay.com/api/";

export async function searchForm(query, page) {
   const API_KEY = '43325485-b0026802577d8a210f4fcd054';
  
    return await axios.get(`https://pixabay.com/api/`, {
      params: {
        key: API_KEY,
        q: query,
        image_type: `photo`,
        orintation: `horizontal`,
        safesearch: true,
        page,
        per_page: 15,
      },
    });
  }