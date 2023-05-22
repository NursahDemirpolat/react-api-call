import axios from 'axios';

const searchImages =async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID lkTYrxQFdUCg-I6Qd7sMq14yCec1n60xyYrYnXcHnYw',
      },
      params:{
        query:term,
      },
    });
    debugger;
    return response.data.result;
  };

  export default searchImages;