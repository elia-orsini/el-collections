export default function RatingsExplanation() {
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
            = good
          </span>
          <span className="block -mt-2">
            <img
              alt="stars"
              className="w-14 mx-auto block inline mr-2"
              src={`3starsb.png`}
            />{" "}
            = great
          </span>
          <span className="block -mt-2">
            <img
              alt="stars"
              className="w-14 mx-auto block inline mr-2"
              src={`4starsb.png`}
            />{" "}
            = amazing
          </span>
          <span className="block -mt-2">
            <img
              alt="stars"
              className="w-14 mx-auto block inline mr-2"
              src={`5starsb.png`}
            />{" "}
            = the best
          </span>
        </div>
      </div>
    );
  }
  