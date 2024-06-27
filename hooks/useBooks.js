import useSWR from "swr";
import SWRFetcher from "utils/SWRFetcher";

export default function useBooks(year) {
  const { data, error, isLoading } = useSWR(`/api/books/${year}`, SWRFetcher());

  return {
    cafes: data,
    isLoading,
    isError: error,
  };
}
