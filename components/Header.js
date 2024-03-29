import Head from "next/head";
import React from "react";

function Header(props) {
  const img = props.img || "https://i.pinimg.com/564x/ba/11/15/ba1115ecf4e99097e49c7d55a129a176.jpg";

  return (
    <Head>
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={img} />
    </Head>
  );
}

export default Header;
