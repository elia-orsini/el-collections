import { Dispatch, SetStateAction } from "react";

const SwitchButton: React.FC<{
  setState: Dispatch<SetStateAction<string>>;
  state: string;
  states: string[];
}> = ({ setState, state, states }) => {
  return (
    <div className="flex flex-col sm:flex-row mx-auto bg-black text-sm w-max">
      {states.map((currentState, i) => {
        return (
          <button
            key={currentState}
            onClick={() => setState(currentState)}
            className={`${state === currentState ? "text-white" : "bg-white"} ${
              i > 0 && `sm:border-l-0 border-t-0`
            } border border-black px-5 sm:px-6 py-1 uppercase sm:border-t`}
          >
            {currentState}
          </button>
        );
      })}
    </div>
  );
};

export default SwitchButton;
