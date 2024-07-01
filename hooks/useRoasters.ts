import useSWR from "swr";
import SWRFetcher from "../utils/SWRFetcher";

export default function useRoasters() {
  const { data, error, isLoading } = useSWR(`/api/roasters`, SWRFetcher());

  return {
    roasters: data,
    isLoading,
    isError: error,
  };
}
