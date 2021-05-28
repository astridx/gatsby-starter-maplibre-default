import * as React from "react"
import { Link } from "gatsby"
import Map from "../components/map"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>
      Welcome to your new Gatsby Maplibre site. Here is a map without extras
    </p>
    <p>
      <Link to="/scroll-fly-to/">Go to "Using Scoll Fly To"</Link>
    </p>
    <Map />
  </Layout>
)

export default IndexPage
