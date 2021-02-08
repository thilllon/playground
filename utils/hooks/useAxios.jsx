import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

export const useAxios = (initialConfig) => {
  const [called, setCalled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const fetch = useCallback(
    (config) => {
      if (!config) config = initialConfig;
      setCalled(true);
      setLoading(true);
      setData(undefined);
      setError(undefined);
      return axios(config)
        .then(setData)
        .catch(setError)
        .finally(setLoading(Boolean));
      // .then((response) => {
      //   setData(response);
      // })
      // .catch((error) => {
      //   setError(error);
      // })
      // .finally(() => {
      // setLoading(false);
      // })
    },
    [initialConfig]
  );

  return [fetch, { called, loading, error, data }];
};

// const getMovies = async (
//   { sortBy, limit } = { sortBy: 'rating', limit: 10 }
// ) => {
// const config = {
//   method: 'GET',
//   url: 'https://yts-proxy.now.sh/list_movies.json',
//   params: {
//     sort_by: sortBy,
//     limit,
//   },
// }
// const result = await axios(config);
//   console.info(result);
//   console.info(result);
//   return result.data.data.movies;
// };
