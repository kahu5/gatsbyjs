import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Solutions" />
    <h1>Solutions</h1>
    <p>Partner with Small Valley Media!</p>
    <p></p>

      <StaticImage
      src="../images/andrea-piacquadio-sm.webp"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="providing modern web platforms"
      style={{ marginBottom: `1.45rem` }}
    />
<p>
    <Link to="/">Go back to the homepage</Link>
</p>
  </Layout>
)

export default SecondPage
