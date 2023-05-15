import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '34885088-d9d31bccec02718712fb034c5';

export const getImage = async (name, page) => {
  const response = await axios.get(
    `/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return {
    images: response.data.hits.map(image => {
      return {
        id: image.id,
        webformatURL: image.webformatURL,
        largeImageURL: image.largeImageURL,
        tags: image.tags,
      };
    }),
    totalHits: response.data.totalHits
  };
};