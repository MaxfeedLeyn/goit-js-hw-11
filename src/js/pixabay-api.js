import axios from 'axios';

function getImagesByQuery(query) {
  return axios.get(`https://pixabay.com/api/`, {
    params: {
      key: '53361470-387588d6f5d48c87f9e06e518',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    }
  });
}

export default getImagesByQuery;