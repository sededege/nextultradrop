import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import { useState } from "react";
import Card from "@/components/Card";

export async function getServerSideProps() {
  const url = "http://54.147.7.66:1337/api/ultradrops?populate=*";
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  return {
    props: {
      resultado,
    },
  };
}

export default function Home({ resultado }) {
  const [data] = useState(resultado.data);
  console.log(data)
  return (
    <Layout pagina="Inicio">
      <div className="w-full h-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-colds-4 gap-10">
        {data.map((e) => (
         <Card 
         img={`http://54.147.7.66:1337${e.attributes.Image.data[0].attributes.url}`}
          title={e.attributes.Title}
         description={e.attributes.Description}
         me={e.attributes.ME}
         />
        ))}
      </div>
    </Layout>
  );
}
