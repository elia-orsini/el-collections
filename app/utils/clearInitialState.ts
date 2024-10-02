export default function clearInitialState(initialState: string) {
  if (
    ["glasgow", "edinburgh", "london", "aberdeen", "china"].includes(
      initialState
    )
  ) {
    return initialState;
  }

  return "glasgow";
}
