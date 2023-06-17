import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@components/Footer";
import Title from "@components/Title";

const IndexPage = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  console.log(windowSize);

  // Listen for window resize events
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="h-screen font-sans">
      <Title />

      <div
        className="h-5/6"
        style={{
          // backgroundImage: `url(/grid.svg)`,
          backgroundSize: `5%`
        }}
      >
        <div className="flex bg-white h-full w-72 mx-auto border-r border-l border-black">
          <div className="w-full mx-auto my-auto text-center flex-1">
            <Link href="/films">
              <div className="h-20 border-t border-b border-black my-10 cursor-pointer">
                <p className="font-black text-4xl uppercase tracking-tight hover:underline">
                  FILMS
                </p>
                <p className="text-xs">indie films only</p>
              </div>
            </Link>

            <Link href="/cafes">
              <div className="h-20 border-t border-b border-black my-10 cursor-pointer">
                <p className="font-black text-4xl uppercase tracking-tight hover:underline">
                  ABDN CAFES
                </p>
                <p className="text-xs">cool cafes (in abdn)</p>
              </div>
            </Link>

            <Link href="/ediCafes">
              <div className="h-20 border-t border-b border-black my-10 cursor-pointer">
                <p className="font-black text-4xl uppercase tracking-tight hover:underline">
                  EDI CAFES
                </p>
                <p className="text-xs">cool cafes (in edi)</p>
              </div>
            </Link>

            <Link href="/books">
              <div className="h-20 border-t border-b border-black my-10 cursor-pointer">
                <p className="font-black text-4xl uppercase tracking-tight hover:underline">
                  BOOKS
                </p>
                <p className="text-xs">books i&apos;ve read this year</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IndexPage;
