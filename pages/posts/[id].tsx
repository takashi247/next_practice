import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from 'next/head';
import { useRouter } from 'next/router';

type PostProps = {
  id: string | undefined;
};

const Post: NextPage<PostProps> = (props) => {
  const { id } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>This page is generated when built by SSR</p>
        <p>{`This page is corresponding to /posts/${id}`}</p>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        id: '1',
      },
    },
    {
      params: {
        id: '2',
      },
    },
    {
      params: {
        id: '3',
      },
    },
  ];
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
  const id = typeof context.params === "undefined"
    ? "99"
    : Array.isArray(context.params['id'])
      ? context.params['id'][0]
      : context.params['id'];

  return {
    props: {
      id,
    },
  };
};

export default Post;