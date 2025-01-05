import { Dispatch, SetStateAction } from "react";

const BooksSwitchButton: React.FC<{
  setState: Dispatch<SetStateAction<string>>;
  state: string;
  states: string[];
}> = ({ setState, state, states }) => {
  return (
    <div className="flex mx-auto bg-black text-sm w-max">
      {states.map((currentState, i) => {
        return (
          <button
            key={currentState}
            onClick={() => setState(currentState)}
            className={`${state === currentState ? "text-white" : "bg-white"} ${
              i > 0 && `sm:border-l-0`
            } border-l border-y last:border-r border-black px-3 sm:px-6 py-1 uppercase`}
          >
            {currentState}
          </button>
        );
      })}
    </div>
  );
};

export default BooksSwitchButton;
