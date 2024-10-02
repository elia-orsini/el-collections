import { Dispatch, SetStateAction } from "react";

const CafesSwitchButton: React.FC<{
  setState: Dispatch<SetStateAction<string>>;
  state: string;
  states: string[];
  lengths: number[];
}> = ({ setState, state, states, lengths }) => {
  return (
    <div className="flex flex-col sm:flex-row mx-auto bg-black text-sm w-max">
      {states.map((currentState, i) => {
        return (
          <button
            key={currentState}
            onClick={() => setState(currentState)}
            className={`${state === currentState ? "text-white" : "bg-white"} ${
              i > 0 && `sm:border-l-0 border-t-0`
            } border flex flex-row h-max border-black px-5 sm:px-6 py-1 uppercase sm:border-t`}
          >
            {currentState}
            <div
              className={`${
                state === currentState && "text-white border-white"
              } w-max mt-0.5 inline px-1 ml-1 text-2xs rounded-full border border-black`}
            >
              {lengths[i]}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default CafesSwitchButton;
