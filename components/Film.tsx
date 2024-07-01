import Link from "next/link";

const Film: React.FC<{
  link: string;
  img: string;
  title: string;
  rating: string;
}> = ({ link, img, title, rating }) => {
  return (
    <div className="flex flex-col w-max mx-auto border border-black bg-white">
      <a href={link} target="_blank" rel="noreferrer">
        <img
          width={300}
          alt={link}
          src={img}
          className="w-72 sm:h-40 mx-auto border border-black z-0 object-contain bg-black cursor-pointer"
        />
      </a>

      <h1 className="font-black text-center text-lg uppercase mt-2 tracking-tight">
        {title}
      </h1>

      {rating ? (
        <img
          alt="stars"
          className="mx-auto w-20 -mt-1"
          src={`${rating}starsb.png`}
        />
      ) : (
        <div className="h-7"></div>
      )}
    </div>
  );
};

export default Film;
