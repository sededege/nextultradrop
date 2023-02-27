import Layout from "@/components/Layout";
import { useState } from "react";
import Card from "@/components/Card";
import { motion } from 'framer-motion'

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
  const data = resultado.data;
  return (
    <Layout page="Inicio">
      <div className="w-full h-full grid sm:grid-cols-1 md:grid-cols-4 lg:grid-colds-5 gap-10">
        {data.map((e, index) => (
          <motion.div
          key={index}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{  ease: "easeOut", duration: 2 , delay: 0.3 + index / 3}}
          >
            <Card
              key={index}
              img={e.attributes.Image.data.attributes.url}
              title={e.attributes.Title}
              description={e.attributes.Description}
              me={e.attributes.ME}
              id={e.id}
            />
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}
