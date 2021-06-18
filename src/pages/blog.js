import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";

function Blog({ data }) {
  return (
    <div>
      <Layout pageTitle="My Blog Posts">
        <ul>
          {data.allFile.nodes.map((node) => (
            <li key={node.name}>{node.name}</li>
          ))}
        </ul>
      </Layout>
    </div>
  );
}

export default Blog;

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;
