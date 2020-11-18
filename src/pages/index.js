import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = (props) => {
  const books = props.data.books.edges
  const posts = props.data.posts.edges
  console.log(posts)
  return (
    <Layout>
    <div className="posts">
        {posts.map(post =>
          <div className="post" key={post.node.id}>
            <h2><Link to={"/blog/" + post.node.frontmatter.slug}>{post.node.frontmatter.title}</Link></h2>
            <p>By {post.node.frontmatter.author}</p>
          </div>)}
      </div>
      <div className="book-container">
        {books.map(book =>
          <div className="book" key={book.node.id}>
            {book.node.thumbnailUrl &&
              <Link to={'/book/' + book.node.id}>
                  <img src={book.node.thumbnailUrl} alt=""/>
                  {/* <h2>{book.node.title}</h2> */}
                  {/* <p>{book.node.shortDescription}</p> */}
              </Link>
            }
          </div>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
      posts: allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              author
            }
          }
        }
      }
      books: allMongodbGatsbyBooks {
        edges {
          node {
            id
            title
            shortDescription
            thumbnailUrl
          }
        }
      }
    }
`
