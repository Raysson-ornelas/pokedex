import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>Sobre nós</title>
      </Head>

      <div className="items-center justify-center flex">
        <img src="playing-games.svg" alt="" className="h-1/2 w-1/2" />
      </div>
    </>
  );
}

export default About;
