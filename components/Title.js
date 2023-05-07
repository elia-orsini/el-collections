import Link from "next/link";

export default function Title({ leftSide }) {
  return (
    <div className="w-full bg-white flex border-t border-b border-black grid lg:grid-cols-3">
      <div className="w-max h-full border-r border-black hidden lg:flex cursor-pointer">
        <Link href={"/"}>
          <img alt="el-logo" className="mx-6 my-auto w-10" src="IMG_3400.JPG" />
        </Link>
      </div>

      <div className="mx-auto py-3 w-72 border-r border-l border-black flex-1 text-center">
        <h1 className="font-semibold text-xl lowercase tracking-wide text-center">
          el&apos;s collections
        </h1>
        <h3 className="text-xs uppercase font-light tracking-tighter">
          collecting cool stuff
        </h3>
      </div>

      <div className="flex h-full justify-self-end">
        <div className="border-l border-black h-full flex">
          <h3 className="px-6 my-auto text-2xs text-right uppercase font-light tracking-tighter hidden lg:block">
            {leftSide ? (
              leftSide
            ) : (
              <span>
                <span className="font-bold">3</span> active collections
              </span>
            )}
          </h3>
        </div>
      </div>
    </div>
  );
}
