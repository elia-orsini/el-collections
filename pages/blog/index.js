import "tailwindcss/tailwind.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import Title from "@components/Title";
import Link from "next/link";

function getDate() {
  const currentDate = new Date();

  // Get the day name
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = daysOfWeek[currentDate.getDay()];

  // Get the day number
  const dayNumber = currentDate.getDate();

  // Get the month name
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = months[currentDate.getMonth()];

  // Function to get the day suffix (e.g., 1st, 2nd, 3rd, 4th, ...)
  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  const daySuffix = getDaySuffix(dayNumber);

  const formattedDate = `${dayName} ${dayNumber}${daySuffix} ${monthName}`;

  return formattedDate;
}

const Coffee = ({ blogPosts }) => {
  return (
    <div className="h-screen min-h-screen font-sans flex-col flex">
      <Header
        title="coffee"
        description="everything i care to know about coffee."
        img="https://i.pinimg.com/564x/76/70/a4/7670a43c9ee6405dd84f523307201558.jpg"
      />

      <Title
        leftSide={
          <span>
            only <span className="font-bold">{blogPosts.length}</span> blog
            posts
          </span>
        }
      />

      <div className="h-full mx-auto flex flex-col w-4/5">
        <div className="mt-10 w-full flex flex-col">

          <div className="flex grid text-sm grid-cols-3 w-full">
            <p className="my-auto">all posts</p>
            <p className="my-auto text-center">as of</p>
            <p className="my-auto text-right">{getDate()}</p>
          </div>

          <div className="text-left mt-10">
            {blogPosts.map((blogPost) => (
              <Link key={blogPost.id} href={`/blog/${blogPost.id}`} passHref>
                <div className="w-max pl-14 my-2">
                  <p className="text-2xl sm:text-3xl cursor-pointer font-black tracking-tighter uppercase border border-black px-2">
                    {blogPost.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const data = await fetch(
    `https://notion-api.splitbee.io/v1/table/${process.env.BLOG}`
  ).then((res) => res.json());

  return {
    props: {
      blogPosts: data,
    },
    revalidate: 10, // revalidate every 10 seconds
  };
}

export default Coffee;
