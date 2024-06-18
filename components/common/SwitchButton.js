export default function SwitchButton({ setState, state, states }) {
  return (
    <div className="flex mx-auto bg-black text-sm">
      {states.map((currentState, i) => {
        return (
          <button
            key={currentState}
            onClick={() => setState(currentState)}
            className={`${state === currentState ? "text-white" : "bg-white"} ${
              i > 0 && `border-l-0`
            } border border-black px-6 py-1`}
          >
            {currentState}
          </button>
        );
      })}
    </div>
  );
}
