export function searchForm(query, page) {
    const pixaBay = `https://pixabay.com/api/`;
    const API_KEY = '43325485-b0026802577d8a210f4fcd054';
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: `photo`,
        orientation: `horizontal`,
      safesearch: true,
      page,
      per_page: 15,
    })
 const url = `https://pixabay.com/api/?${params}`;
    return fetch(url)

    .then(res => {
   if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
};