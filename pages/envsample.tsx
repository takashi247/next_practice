import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

const EnvSample: NextPage = (props) => {
  // 'test1' if rendered in server side, otherwise 'undefined'
  console.log('process.env.TEST', process.env.TEST);
  // always shown as 'test2'
  console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>{process.env.TEST}</p>
        <p>{process.env.NEXT_PUBLIC_TEST}</p>
      </main>
    </div>
  );
};

// getStaticProps has access to all the env variables as it's always executed in the server side
export const getStaticProps: GetStaticProps = async (context) => {
  console.log('process.env.TEST', process.env.TEST);
  console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST);
  return {
    props: {},
  };
};

export default EnvSample;