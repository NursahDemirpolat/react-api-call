import axios from 'axios';

const searchImages = async(term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID lkTYrxQFdUCg-I6Qd7sMq14yCec1n60xyYrYnXcHnYw', //api'ye erişim keyi
    },
    params: {
      query: term, 
    },
  });

  // debugger; --Adım adım kodu izleme varsa hatayı görme
  return response.data.results;
};

export default searchImages;
