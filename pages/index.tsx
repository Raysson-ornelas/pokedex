import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid min-h-[70vh] content-center text-center">
        <h1 className="py-3 text-3xl font-bold">Teste1</h1>
        <h2>Teste</h2>
      </div>
    </div>
  );
};

export default Home;
