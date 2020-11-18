import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "./layout"

class Blog extends React.Component {
  render() {
    const post = this.props.data.post
    const book = this.props.data.book
    // console.log(book)

    return (
        <Layout>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <h2>By {post.frontmatter.author}</h2>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
                {book &&
                    <Link to={"/book/" + book.id}>
                        <img src={book.thumbnailUrl} alt=""/>
                    </Link>
                }
            </div>
        </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query($id: String!, $book: String) {
    post: markdownRemark(frontmatter : {slug: { eq: $id }}) {
      id
      frontmatter {
          title
          author
      }
      html
    }
    book: mongodbGatsbyBooks(id: { eq: $book }) {
        id
        thumbnailUrl
      }
    }
`