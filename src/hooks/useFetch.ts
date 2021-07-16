import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T>();

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(url);
      const data = (await response.json()) as T;
      setData(data);
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { isLoading, data };
};

export default useFetch;
