import axios, { AxiosResponse, AxiosError } from "axios";
import { useEffect, useState } from "react";

interface ApiResponse<T> {
  data: T | null;
  isLoading: boolean;
  error: AxiosError | null;
}

export default function useAPI<T>(url: string): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    axios
      .get(url)
      .then((response: AxiosResponse<T>) => {
        if (isMounted) {
          setData(response.data);
          setError(null);
        }
      })
      .catch((error: AxiosError) => {
        if (isMounted) {
          setError(error);
          setData(null);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, isLoading, error } as const;
}
