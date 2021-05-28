import * as React from "react"
import { Link } from "gatsby"
import Map from "../components/map"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Scroll Fyl To" />
    <h1>Scroll Fyl To Example</h1>
    <Link to="/">Go back to the homepage</Link>
    <Map />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
