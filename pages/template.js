import "tailwindcss/tailwind.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/router";

const Template = ({ children }) => {
  const router = useRouter();

  useGSAP(() => {
    const handleRouteComplete = () => {
      const timeline = gsap.timeline();

      timeline.to(["#banner-1", "#banner-2", "#banner-3", "#banner-4"], {
        yPercent: 0,
        duration: 0,
      });
      timeline.to(["#banner-1", "#banner-2", "#banner-3", "#banner-4"], {
        yPercent: 100,
        stagger: 0.2,
      });

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
          id="banner-1"
          className="min-h-screen bg-black z-20 fixed top-0 left-0 w-1/4"
        ></div>
        <div
          id="banner-2"
          className="min-h-screen bg-black z-20 fixed top-0 left-1/4 w-1/4"
        ></div>
        <div
          id="banner-3"
          className="min-h-screen bg-black z-20 fixed top-0 left-2/4 w-1/4"
        ></div>
        <div
          id="banner-4"
          className="min-h-screen bg-black z-20 fixed top-0 left-3/4 w-1/4"
        ></div>
      </div>
      {children}
    </>
  );
};

export default Template;
