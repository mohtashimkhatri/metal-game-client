import Head from "next/head";
import Content from "../components/Content";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import { createClient } from "next-sanity";

export default function Home({ games }) {
  return (
    <>
      <Head>
        <title>Metal Games </title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Layout>
        <Hero />
        <Content games={games} />
      </Layout>
    </>
  );
}
const client = createClient({
  projectId: "03zqzche",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false
});
export async function getStaticProps() {
  const games = await client.fetch(`*[_type == "games"]`);

  return {
    props: {
      games
    }
  };
}