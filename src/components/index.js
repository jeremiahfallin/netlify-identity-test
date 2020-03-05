import React, { useState, useEffect } from "react"
import Link from "gatsby-link"
// import styles from "./products.module.css"
import { graphql } from "gatsby"
const netlifyIdentity = require("netlify-identity-widget")

const Products = () => {
  const [products, setProducts] = useState([])

  const getProducts = () => {
    return netlifyIdentity.currentUser() != null
      ? setProducts(["One", "Two"])
      : setProducts(["Three", "Four"])
  }

  const updateProducts = () => {
    getProducts()
  }

  useEffect(() => {
    netlifyIdentity.on("login", user => updateProducts())
    netlifyIdentity.on("logout", () => updateProducts())
    updateProducts()
  }, [])

  return (
    <div>
      <h1>Products</h1>

      <ul>
        {products.map((o, index) => (
          <li key={index}>{o}</li>
        ))}
      </ul>
    </div>
  )
}

export default Products

// export const query = graphql`
//   query allProducts {
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             sku
//             loc
//             price
//             desc
//             private
//             name
//             image
//           }
//         }
//       }
//     }
//   }
// `
