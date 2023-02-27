import Head from "next/head";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pagina }) => {
  return (
    <>
      <Head>
        <title>UltraDrop Test</title>
        <meta name="description" content="Ultradrop test by Sebagtech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className="px-4 w-full h-full  flex items-center pb-20 md:p-0 md:px-20">
        {children}
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
