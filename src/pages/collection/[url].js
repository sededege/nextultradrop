import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const url = ({ collection }) => {
  const data = collection.data.attributes;
  return (
    <Layout page="Detalle">
      <div className="w-full h-full grid sm:grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <Image
            className="w-full md:h-[80vh] object-cover rounded-2xl"
            src={data.Image.data.attributes.url}
            width={500}
            height={400}
            alt={data.Title}
            priority={true}
          />
        </div>
        <div className="text-white gap-6 flex flex-col relative">
          <h1 className="font-bold text-[3em]">{data.Title}</h1>
          <p className="text-[1.3em] text-gray-400">{data.Description}</p>
          <div className="flex flex-col">
            <h2 className="text-[1.4rem]">Price</h2>
            <div className="flex gap-4">
              <img className="w-8" src="/img/solana-logo.svg" alt="sol logo" />

              <p className=" text-[2rem]  text-gray-300">
                {data.Price}{" "}
                <span className="text-[1.4rem]">({data.Price * 22} usd)</span>{" "}
              </p>
            </div>
            <h2 className="text-[1.4rem]">Supply</h2>
            <div className="flex gap-4">
              <p className=" text-[1.5rem]  text-gray-300">
                {data.Qty}/{data.Qty}
              </p>
            </div>
          </div>
          <div className="md:flex-row  flex-col flex gap-4 items-center md:absolute md:bottom-0 md:right-0">
            <Link href="/" className="hidden md:flex underline font-bold">
              Back
            </Link>
            <button className="w-full md:w-[200px] bg-[#8464e2] hover:bg-white border-2 border-[#8464e2] hover:text-[#8464e2] transition duration-500 p-6 rounded-lg font-bold">
              Mint one
            </button>
            <a
              className="w-full md:w-[200px] bg-pink-500 hover:bg-white border-pink-500 border-2 hover:text-pink-500 transition duration-500  p-6 rounded-lg font-bold text-center"
              href={data.ME}
            >
              Buy on Magic Eden
            </a>
            <Link href="/" className="underline font-bold text-white md:hidden flex text-center p-2 mx-auto">
            Back
          </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default url;

export async function getServerSideProps({ query: { url } }) {
  const urlCollection = `http://54.147.7.66:1337/api/ultradrops/${url}?populate=*`;
  const respuesta = await fetch(urlCollection);
  const collection = await respuesta.json();
  return {
    props: {
      collection,
    },
  };
}
