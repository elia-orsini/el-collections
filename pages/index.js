import "tailwindcss/tailwind.css";
import React from "react";
import Link from "next/link";
import Footer from "@components/Footer";
import Title from "@components/Title";

const IndexPage = () => {
  return (
    <div className="h-screen font-sans">
      <Title />

      <div className="flex h-5/6 w-72 mx-auto border-r border-l border-black">
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
                CAFES
              </p>
              <p className="text-xs">cool cafes (in abdn)</p>
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

      <Footer />
    </div>
  );
};

export default IndexPage;
