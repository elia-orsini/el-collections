import useSWR from "swr";
import SWRFetcher from "utils/SWRFetcher";

export default function useFilms() {
  const { data, error, isLoading } = useSWR(`/api/films`, SWRFetcher());

  const films = data ? data.results : [];

  return {
    films,
    isLoading,
    isError: error,
  };
}
