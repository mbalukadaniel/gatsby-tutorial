import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I am making this site following Gatsby tutorial</p>
      <StaticImage
        src="../images/Subaru_Forester.webp"
        alt="My dream car in 2021"
      />
    </Layout>
  );
};

export default IndexPage;
