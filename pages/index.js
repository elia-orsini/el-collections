import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@components/Footer";
import Title from "@components/Title";
import FunkyText from "@components/FunkyText";
import Header from "@components/Header";

const IndexPage = () => {
  const [explain, setExplain] = useState(false);

  return (
    <div className="h-screen min-h-screen flex-col flex justify-between">
      <Header
        title="elia's personal database"
        description="elia's personal database collecting good films, amazing cafes and books I read."
      />

      <Title />

      <div className="mx-auto p-2 lowercase text-sm w-full sm:w-2/5 cursor-pointer text-center border-dashed border-b border-r border-l border-black font-mono">
        <p>
          jsut a smplie wbeiste clloeictng tihngs i read and wtach and cffoee i
          dirnk ? wrnanig: vrey opinntioaed.
        </p>
      </div>
      <div className="h-full flex">
        <div className="flex bg-white my-auto mx-auto w-full sm:w-2/5 h-full border-dashed border-r border-l border-black font-mono">
          <div className="w-full my-auto text-center flex-1">
            <div className="flex my-10">
              <Link href="/films" passHref>
                <p className="mx-auto my-auto cursor-pointer text-5xl lowercase tracking-tight hover:text-gray-700">
                  <FunkyText text="films" />
                </p>
              </Link>
            </div>

            <div className="flex border-black my-10">
              <Link href="/cafes" passHref>
                <p className="mx-auto my-auto cursor-pointer text-5xl lowercase tracking-tight hover:text-gray-700">
                  <FunkyText text="cafes" />
                </p>
              </Link>
            </div>

            <div className="flex border-black my-10">
              <Link href="/books" passHref>
                <p className="mx-auto my-auto cursor-pointer text-5xl lowercase tracking-tight hover:text-gray-700">
                  <FunkyText text="books" />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mx-auto p-2 lowercase text-sm w-full sm:w-2/5 cursor-pointer text-center border-dashed border-t border-r border-l border-black font-mono"
        onClick={() => setExplain(!explain)}
      >
        {explain ? (
          <p>
            wlel mabye it&apos;s not ? typoglycemia is a priincple cailimng taht
            reaedrs can uenadrstnd wrdos eevn wehn the caharcetrs in the mdidle
            of a wrod are rndmaloy re-orederd like tihs.
          </p>
        ) : (
          <p>why is this so confusing ?</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default IndexPage;
