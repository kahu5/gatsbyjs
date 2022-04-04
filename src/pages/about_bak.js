import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="About" />
    <h1>About</h1>
    <p>Partner with Small Valley Media!</p>
    <p>We are a committed network of technology professions ready to deliver and extend your goals. 
  Even non-technical strategies depend upon the "pipes of technology" to be functioning. We are here to clean and keep clear these pipes, so you can get back to work in the areas that matter. </p>

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
