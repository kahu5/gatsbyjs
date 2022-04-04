import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactForm from '../components/ContactForm2'
import '../components/form.css';

const SecondPage = () => (
  <Layout>
    <Seo title="Contact" />
    <h1>Contact</h1>
  
<section id="contactUs" className="main special">
    <header className="major">
        <h2>Reach out and we will contact you within 48hrs.</h2>
    <ContactForm action="https://getform.io/f/2c4ddf21-bd0d-40e9-a111-7d0c59cf0809"></ContactForm>
    </header>
</section>
  </Layout>
)

export default SecondPage
