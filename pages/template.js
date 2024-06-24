import "tailwindcss/tailwind.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/router";

const Template = ({ children }) => {
  const router = useRouter();

  useGSAP(() => {
    const handleRouteComplete = () => {
      const banners = gsap.utils.toArray("#blackBanner");

      gsap.fromTo(
        banners,
        {
          yPercent: 0,
          duration: 0,
        },
        {
          yPercent: 200,
          stagger: 0.2,
          duration: 2,
          delay: 0.1,
        }
      );

      return () => {
        timeline.kill();
      };
    };

    handleRouteComplete();

    router.events.on("routeChangeComplete", handleRouteComplete);

    return () => {
      router.events.off("routeChangeComplete", handleRouteComplete);
    };
  }, [router.events]);

  return (
    <>
      <div>
        <div
          id="blackBanner"
          className="min-h-screen bg-black z-20 fixed top-0 left-0 w-1/4"
        ></div>
        <div
          id="blackBanner"
          className="min-h-screen bg-black z-20 fixed top-0 left-1/4 w-1/4"
        ></div>
        <div
          id="blackBanner"
          className="min-h-screen bg-black z-20 fixed top-0 left-2/4 w-1/4"
        ></div>
        <div
          id="blackBanner"
          className="min-h-screen bg-black z-20 fixed top-0 left-3/4 w-1/4"
        ></div>
      </div>
      {children}
    </>
  );
};

export default Template;
