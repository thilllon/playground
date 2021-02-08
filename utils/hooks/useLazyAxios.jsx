import React, { useEffect, useState, useCallback, useMemo } from 'react';
import axios from 'axios';

export const useLazyAxios = (initialConfig) => {
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
    },
    [initialConfig]
  );

  useMemo(() => {
    fetch();
  }, []);

  return { called, loading, error, data };
};
