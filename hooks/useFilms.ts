import useSWR from "swr";
import SWRFetcher from "../utils/SWRFetcher";

export default function useFilms() {
  const { data, error, isLoading } = useSWR(`/api/films`, SWRFetcher());

  return {
    films: data,
    isLoading,
    isError: error,
  };
}
