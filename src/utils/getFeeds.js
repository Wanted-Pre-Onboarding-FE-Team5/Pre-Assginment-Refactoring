import axios from 'axios';

export const getFeeds = async () => {
  const result = await axios
    .get('http://localhost:8080/feeds')
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e.message);
      return [];
    });
  return result;
};
