import { useState, useEffect } from 'react'


export const useFetch = (url, query) => {
  const [response, setResponse] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false)
    };

    if (query) {
      fetchData();
    }
  }, [url, query])

  return { response, isLoading, isError };

};

