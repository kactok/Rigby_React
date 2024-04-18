import { useState, useEffect } from "react";

export default function useFetch(fetchFn, initialData) {
  const [isFetching, setIsFetching] = useState(false);
  const [fetchedData, setFetchedData] = useState(initialData);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setIsFetching(true);
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setIsError(error.message || "Failed to fetch data!");
      }
      setIsFetching(false);
    }
    fetchData();
  }, [fetchFn]);

  return {
    fetchedData,
    isError,
    isFetching,
  };
}
