import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Página principal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid min-h-[70vh] content-center text-center">
        {session ? (
          <h1 className="text-xl font-bold text-gray-500">
            Bem vindo {session.user?.name}
          </h1>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
