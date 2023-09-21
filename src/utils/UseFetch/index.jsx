import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    const cachedData = localStorage.getItem(url);

    if (cachedData) {
      setData(JSON.parse(cachedData));
      setLoading(false);
    } else {
      setLoading(true);

      async function fetchData() {
        try {
          let config = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
              'Accept-Encoding': 'gzip, deflate',
            },
          };
          const response = await fetch(`https://oc-p8-kasa.vincent-deramaux-portfolio.fr/${url}`, config);
          const responseData = await response.json();
          setData(responseData);

          localStorage.setItem(url, JSON.stringify(responseData));
        } catch (err) {
          console.error(err);
          setError(true);
        } finally {
          setLoading(false);
        }
      }

      fetchData();
    }
  }, [url]);

  return { isLoading, data, error };
}
