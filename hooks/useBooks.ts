import useSWR from "swr";
import SWRFetcher from "../utils/SWRFetcher";

export default function useBooks(year: string) {
  const { data, error, isLoading } = useSWR(`/api/books/${year}`, SWRFetcher());

  return {
    books: data,
    isLoading,
    isError: error,
  };
}
