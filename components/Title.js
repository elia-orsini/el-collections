import Link from "next/link";

export default function Title({ leftSide }) {
  return (
    <div className="w-full bg-white flex border-t border-b border-black grid lg:grid-cols-3 z-10">
      <div className="flex w-max h-full border-r border-black hidden lg:flex cursor-pointer">
        <Link href={"/"} passHref>
          <div className="mx-5 my-auto w-10">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 817.36 821.75"
            >
              <path
                class="cls-1"
                d="M806,543.29c-39.84-9-76.67-12.59-114-7.53-55.83,7.57-85.35,41.2-87.31,97.92-1.83,52.93-5,105.82-6.67,158.76-2.84,90.74-7.16,181.52-6.59,272.27.37,58.48,15.72,115.07,42.87,167.57,37.16,71.86,95.59,113.27,180.46,122.92-56.38-31.26-88.65-76.52-105.13-134.15-14-49-13.54-98.73-7.24-148.52,4-31.83,11.94-62.88,29.14-90.75,21.71-35.18,55.95-50.58,96.44-43.89,31.23,5.15,57.26,20.43,81,40.28,24.22,20.28,42.79,45.14,57.17,76.18,1.66-7.08,2.89-11.24,3.55-15.48.75-4.78,1-9.63,1.45-14.45,4.88-52.23-2.91-101.73-34.69-144.86-36.28-49.25-89.15-67.45-146.93-75.92-5.49-.8-12.63-3.75-15.34-8-29.69-46.88-55.21-95.66-65.65-151-9.72-51.52,10.58-86.29,57.23-96.19C777.79,545.86,790.32,545.23,806,543.29Zm599.56,627.84,3.14-1.78c-5.45-13.76-10.18-27.85-16.45-41.22C1349.77,1037.61,1274.52,964.75,1145,994c-9,2-11.8-2.21-15.57-8.37Q1075.88,898.15,1022,810.94c-7.86-12.74-16-25.31-24-38a19.74,19.74,0,0,0,1.28,11.9c27.68,70.38,50.75,142.15,59.34,217.58,6.75,59.25,10.06,118.53-41.77,168.26,20.63-7,36.86-12.83,53.28-18,70.88-22.43,142.52-40.71,217.82-37C1334.55,1118,1376.76,1130.2,1405.54,1171.13Z"
                transform="translate(-591.32 -533.45)"
              />
              <path
                d="M806,543.29c-15.66,1.94-28.19,2.57-40.31,5.14-46.65,9.9-66.95,44.67-57.23,96.19,10.44,55.34,36,104.12,65.65,151,2.71,4.27,9.85,7.22,15.34,8,57.78,8.47,110.65,26.67,146.93,75.92,31.78,43.13,39.57,92.63,34.69,144.86-.45,4.82-.7,9.67-1.45,14.45-.66,4.24-1.89,8.4-3.55,15.48-14.38-31-32.95-55.9-57.17-76.18-23.71-19.85-49.74-35.13-81-40.28-40.49-6.69-74.73,8.71-96.44,43.89-17.2,27.87-25.11,58.92-29.14,90.75-6.3,49.79-6.79,99.49,7.24,148.52,16.48,57.63,48.75,102.89,105.13,134.15-84.87-9.65-143.3-51.06-180.46-122.92-27.15-52.5-42.5-109.09-42.87-167.57C590.8,974,595.12,883.18,598,792.44c1.66-52.94,4.84-105.83,6.67-158.76,2-56.72,31.48-90.35,87.31-97.92C729.31,530.7,766.14,534.3,806,543.29Z"
                transform="translate(-591.32 -533.45)"
              />
              <path
                d="M1405.54,1171.13c-28.78-40.93-71-53.18-117.63-55.46-75.3-3.69-146.94,14.59-217.82,37-16.42,5.2-32.65,11-53.28,18,51.83-49.73,48.52-109,41.77-168.26-8.59-75.43-31.66-147.2-59.34-217.58A19.74,19.74,0,0,1,998,773c8,12.65,16.14,25.22,24,38q53.83,87.27,107.45,174.66c3.77,6.16,6.54,10.4,15.57,8.37,129.54-29.22,204.79,43.64,247.25,134.16,6.27,13.37,11,27.46,16.45,41.22Z"
                transform="translate(-591.32 -533.45)"
              />
            </svg>
          </div>
        </Link>
      </div>

      <div className="mx-auto py-3 w-72 border-r border-l border-black flex-1 text-center">
        <h1 className="text-xl font-light lowercase tracking-tight text-center">
          el&apos;s collections
        </h1>
        <h3 className="text-xs uppercase font-light tracking-tighter">
          collecting cool stuff
        </h3>
      </div>

      <div className="flex h-full justify-self-end hidden sm:block">
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
