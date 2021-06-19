import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

function Blog({ data }) {
  console.log(data);
  return (
    <div>
      <Layout pageTitle="My Blog Posts">
        <h1>Amazing Pandas Eating this</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>
                {node.frontmatter.title} -{" "}
                <span style={{ color: "#bbb" }}>{node.frontmatter.date}</span>
              </h3>
            </Link>
          </div>
        ))}
      </Layout>
    </div>
  );
}

export default Blog;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
