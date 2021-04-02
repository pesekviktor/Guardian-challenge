import { useEffect, useState } from "react";

type GuardianApiData = Array<{
  webTitle: string;
}>;

export const useGuardianApiHook = (query: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<GuardianApiData>();
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    const onFetchError = () => {
      setLoading(false);
      setError(true);
    };

    const fetchDataAsync = async () => {
      try {
        const result = await fetch(
          `https://content.guardianapis.com/search?api-key=${process.env.REACT_APP_GUARDIAN_API_KEY}&q=${query}`
        );
        if (!result.ok) {
          onFetchError();
        } else {
          setLoading(false);
          const data = await result.json();
          setData(data.response?.results);
        }
      } catch (e) {
        onFetchError();
      }
    };
    fetchDataAsync();
  }, [query, setData, setLoading]);
  return { loading, data, error };
};
