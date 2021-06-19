import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <div>
      <Layout>
        <SEO title={post.frontmatter.title} description={post.excerpt}></SEO>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    </div>
  );
}

export default BlogPost;

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`;
