import { graphql } from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import Hero from "../components/hero"
import Layout from "../components/layout"
import { Newsletter } from "../components/newsletter"
import { Products } from "../components/products"
import { SearchArea } from "../components/search-area"
import SEO from "../components/seo"

export const query = graphql`
  {
    images: allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        sourceInstanceName: { eq: "products8" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 350, pngCompressionSpeed: 10, quality: 25) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data: { images } }) => (
  <Layout>
    <SEO
      title="For small businesses, individuals and booth rentals"
      lang="en"
      description="⭐️ Make your customers fall in love with your business ❤️ Choose from the best Salon 💇🏽‍♀️ and Barber 💈 software available for booth renters. Operate effectively and retain your clients 😊"
    />
    <Helmet>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous"
      />
      <script
        src="https://kit.fontawesome.com/6d995c7810.js"
        crossorigin="anonymous"
      ></script>
    </Helmet>
    <Hero />
    <SearchArea />
    <Products images={images} />
    <Newsletter />
  </Layout>
)

export default IndexPage
