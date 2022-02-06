import type { NextPage } from "next";
import Head from "next/head";
import { v4 } from "uuid";
import MainLayout from "../components/layouts/MainLayout";
import MyOwnProjects from "../components/projects/MyOwnProjects";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LivingIdea</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <MainLayout>
        <MyOwnProjects />
      </MainLayout>
    </div>
  );
};

export default Home;
