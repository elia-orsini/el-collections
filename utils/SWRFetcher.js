export default function SWRFetcher() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  return fetcher;
}
