const Footer: React.FC = () => {
  return (
    <div className="w-full border-dashed border-t border-black text-2xs text-left uppercase px-2 py-10">
      <p>a personal database.</p>

      <p>
        made with {`<3`} by{" "}
        <a
          href="https://elia-orsini.com"
          rel="noreferrer"
          target="_blank"
          className="underline"
        >
          elia orsini
        </a>{" "}
        © 2024
      </p>

      <p className="mt-2">all data stored in notion.</p>
      <p className="mt-2">frontend crafted using next.js.</p>
    </div>
  );
};

export default Footer;
