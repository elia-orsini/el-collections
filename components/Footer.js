export default function Footer() {
  return (
    <div className="w-full bg-white flex border-dashed border-t border-b border-black text-xs text-center">
      <div className="px-10 mx-auto border-r border-l border-black py-2 font-mono">
        <p>elia orsini © 2022</p>
        <a
          href="https://elia-orsini.com"
          rel="noreferrer"
          target="_blank"
          className="text-2xs text-blue-600 underline"
        >
          my real website
        </a>
      </div>
    </div>
  );
}
