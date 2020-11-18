import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

class Item extends React.Component {
    render() {
        const book = this.props.data.mongodbGatsbyBooks
        // console.log(book)
        return (
            <Layout>
                <>
                    <img src={book.thumbnailUrl} alt=""/>
                    <h1>{book.title}</h1>
                    {/* <p>By {book.authors.map(author => ( <span>{author}, </span>))}</p> */}
                    <p>{book.longDescription}</p>
                    <p>Published: {book.publishedDate} | ISBN: {book.isbn}</p>
                    {/* {book.categories.map(category => category)} */}
                </>
            </Layout>
        )
    }
}

export default Item

export const pageQuery = graphql`
query($id: String) {
    mongodbGatsbyBooks(id: { eq: $id }) {
      id
      title
      longDescription
      thumbnailUrl
      isbn
      publishedDate(formatString: "MMMM DD, YYYY")
    }
  }
`


    // query($id: String!) {
    //     mongodbGatsbyBooks(filter: {id: { eq: $id }}) {
    //     id
    //     title
    //     longDescription
    //     thumbnailUrl
    //     isbn
    //     pageCount
    //     publishedDate(formatString: "MMMM DD, YYYY")
    //     authors
    //     categories
    //     }
    // }