const RatingsExplanation: React.FC = () => {
  return (
    <div className="mx-auto flex w-72 border border-black mt-8">
      <div className="text-left mx-auto text-2xs">
        <span className="block">
          <img
            alt="stars"
            className="w-14 mx-auto block inline mr-2"
            src={`1starsb.png`}
          />{" "}
          = ok
        </span>
        <span className="block -mt-2">
          <img
            alt="stars"
            className="w-14 mx-auto block inline mr-2"
            src={`2starsb.png`}
          />{" "}
          = oh that&apos;good
        </span>
        <span className="block -mt-2">
          <img
            alt="stars"
            className="w-14 mx-auto block inline mr-2"
            src={`3starsb.png`}
          />{" "}
          = so great
        </span>
        <span className="block -mt-2">
          <img
            alt="stars"
            className="w-14 mx-auto block inline mr-2"
            src={`4starsb.png`}
          />{" "}
          = one of a kind
        </span>
        <span className="block -mt-2">
          <img
            alt="stars"
            className="w-14 mx-auto block inline mr-2"
            src={`5starsb.png`}
          />{" "}
          = legendary
        </span>
      </div>
    </div>
  );
};

export default RatingsExplanation;
