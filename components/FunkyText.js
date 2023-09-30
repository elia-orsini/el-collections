import { useEffect, useState } from "react";

const FunkyText = ({ text }) => {
  const [funkyText, setFunkyText] = useState(text);

  useEffect(() => {
    let currentIndex;
    let newString = funkyText;
    const original = text;

    const array = original.split("");
    // array.push(...["_"]);

    const interval = setInterval(() => {
      newString = funkyText.replace(currentIndex, original[currentIndex]);

      currentIndex = Math.floor(Math.random() * funkyText.length);
      currentIndex = Math.max(Math.min(currentIndex, newString.length - 2), 1);

      // const char = array[Math.floor(Math.random() * array.length)];
      // newString =
      //   newString.slice(0, currentIndex) +
      //   char +
      //   newString.slice(currentIndex + 1);

      const middleChars = newString.slice(1, -1);

      const shuffledMiddleChars = middleChars
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");


      newString = newString[0] + shuffledMiddleChars + newString[newString.length - 1];

      setFunkyText(newString);

    }, 100);


    return () => clearInterval(interval);
  }, []);

  return <span>{funkyText}</span>;
};

export default FunkyText;
