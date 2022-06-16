import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Small Valley Media Homepage" />
  <h2>Welcome. Our partnership delivers secure and sustainable solutions to achieve your business outcomes.</h2> 
      <StaticImage
      src="../images/jopwell-sm.webp"
      width={400}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="sustainable and secure work solutions"
      className="paragraphImage"
      style={{ marginBottom: `1.45rem` }}
    />
  <p>We provide online hosting and communication infrastructure for your web solutions. Use your platform with confidence to advance business outcomes now.</p>
   <p>Integrate your data sources into meaningful reporting you can take action on.</p>

  <ul class="actionList">
    <li>Augment your team's work with our experise on-demand</li>
    <li>Receive professional engineering for your custom website</li>
    <li>Consult and receive solid support for tech issues or on-going maintenance </li>
  </ul>
<p>Let the computers compute so people can be personal!</p>
  <div style={{ clear: "both", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
    <div style={{backgroundColor: "#bdbdbd",}}>    <StaticImage
      src="../images/bi_report.webp"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="sustainable and secure work solutions"
      className="paragraphImage"
      style={{ marginBottom: `1.45rem` }}
    />
    <h4 style={{textAlign: "center",}}>Business Intelligence Reports</h4>
  </div>
    <div style={{backgroundColor: "#bdbdbd",}}>    <StaticImage
      src="../images/email_auth.webp"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="sustainable and secure work solutions"
      className="paragraphImage"
      style={{ marginBottom: `1.45rem` }}
    />
      <h4 style={{textAlign: "center",}}>Email Authentication</h4>
  </div>
    <div style={{backgroundColor: "#bdbdbd",}}>    <StaticImage
      src="../images/web_host.webp"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="sustainable and secure work solutions"
      className="paragraphImage"
      style={{ marginBottom: `1.45rem` }}
    />
        <h4 style={{textAlign: "center",}}>Secure Domain Management</h4>
  </div>
  </div>
  </Layout>
)

export default IndexPage
