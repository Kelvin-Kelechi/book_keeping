import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  const reFetch = async () => {
    setLoading(true);
    try {
      res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };
  return { data, error, loading, reFetch };
};

export default useFetch;
