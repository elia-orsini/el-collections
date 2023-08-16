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
        title="el's blog"
        description="a collection of topics i find interesting."
      />

      <Title
        leftSide={
          <span>
            only <span className="font-bold">{blogPosts.length}</span> blog
            posts
          </span>
        }
      />

      <div className="h-screen min-h-screen mx-auto flex flex-col w-4/5">
        <div className="mt-10 w-full flex flex-col">
          <div className="text-sm grid-cols-3 w-full flex flex-col text-center sm:grid">
            <p className="my-auto sm:text-left">all posts</p>
            <p className="my-auto">as of</p>
            <p className="my-auto sm:text-right">{getDate()}</p>
          </div>

          <hr className="border-black mt-2" />

          <div className="text-left mt-10 w-max mx-auto">
            {blogPosts.map((blogPost, index) => (
              <Link key={blogPost.id} href={`/blog/${blogPost.id}`} passHref>
                <div className="w-max my-2 cursor-pointer">
                  <p className="text-md sm:text-3xl font-black tracking-tighter uppercase border border-black px-2">
                    <span className="font-extrabold text-sm mr-1">
                      {blogPosts.length - index}
                    </span>
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
      blogPosts: data.reverse(),
    },
    revalidate: 10, // revalidate every 10 seconds
  };
}

export default Coffee;
