import { useState, useEffect, useCallback } from "react";

export default function useFetch(fetchFn, initialData, method) {
  const [isFetching, setIsFetching] = useState(false);
  const [fetchedData, setFetchedData] = useState(initialData);
  const [isError, setIsError] = useState("");

  const fetchData = useCallback(
    async function fetchData(...args) {
      setIsError("");
      try {
        setIsFetching(true);
        const data = await fetchFn(...args);
        setFetchedData(data);
      } catch (error) {
        setIsError(error.message || "Failed to fetch data!");
      }
      setIsFetching(false);
    },
    [fetchFn]
  );

  useEffect(() => {
    if (method === "GET") fetchData();
  }, [fetchData, method]);

  return {
    fetchedData,
    isError,
    isFetching,
    setFetchedData,
    fetchData,
    setIsError,
  };
}
