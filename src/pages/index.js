import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AuthExample from "../components/authExample"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AuthExample />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
