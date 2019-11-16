import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import { Product } from "../components/product"
import SEO from "../components/seo"
import ProductsData from "../content/products.yaml"

const findImage = (images, imgName) => {
  let img = images.edges.find(
    ({
      node: {
        childImageSharp: {
          fluid: { src },
        },
      },
    }) => src.endsWith(imgName)
  )
  if (!img) {
    img = images.edges[0]
  }
  return img.node.childImageSharp.fluid
}

const ProductDetail = ({ pageContext }) => {
  const { product } = pageContext
  const [tab, setTab] = useState("description")

  const hasMenu = product.facebook || product.twitter

  return (
    <StaticQuery
      query={graphql`
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
                  fluid(maxWidth: 800, pngCompressionSpeed: 10, quality: 25) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          images2: allFile(
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
      `}
      render={({ images, images2 }) => (
        <Layout>
          <SEO
            title={product.name}
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
            <script
              async
              defer
              crossorigin="anonymous"
              src="https://connect.facebook.net/sk_SK/sdk.js#xfbml=1&version=v5.0&appId=1201104880085665&autoLogAppEvents=1"
            ></script>
            <script
              async
              defer
              crossorigin="anonymous"
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </Helmet>
          <div className="breadcumb-area ptb-70 bg-5">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="breadcumb-wrap">
                    <h2>{product.name}</h2>
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>/</li>
                      <li>App Details</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-details-area ptb-70 bg-2">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-lg-9 col-xs-12">
                  <div className="product-details-wrap">
                    <div className="product-details-active">
                      <div className="product-details-img" data-hash="one">
                        <Img
                          fluid={findImage(images, product.img)}
                          style={{ width: "827px" }}
                          imgStyle={{ objectPosition: "0% 0%" }}
                          alt="Application Screenshot"
                        />
                      </div>
                    </div>
                  </div>
                  {hasMenu && (
                    <div className="product-details-menu">
                      <ul>
                        <li
                          className={
                            tab === "description" ? "active" : undefined
                          }
                        >
                          <a
                            href="#description"
                            onClick={e => {
                              setTab("description")
                              e.preventDefault()
                            }}
                          >
                            Description
                          </a>
                        </li>

                        {product.facebook && (
                          <li
                            className={
                              tab === "facebook" ? "active" : undefined
                            }
                          >
                            <a
                              href="#facebook"
                              onClick={e => {
                                setTab("facebook")
                                setTimeout(() => {
                                  // eslint-disable-next-line no-undef
                                  FB.XFBML.parse()
                                })
                                e.preventDefault()
                              }}
                            >
                              <i className="fab fa-facebook-f"></i> Facebook
                            </a>
                          </li>
                        )}

                        {product.twitter && (
                          <li
                            className={tab === "twitter" ? "active" : undefined}
                          >
                            <a
                              href="#twitter"
                              onClick={e => {
                                setTab("twitter")
                                setTimeout(() => {
                                  // eslint-disable-next-line no-undef
                                  twttr.widgets.createTimeline(
                                    {
                                      sourceType: "profile",
                                      screenName: product.twitter,
                                    },
                                    document.getElementById("twitter-timeline")
                                  )
                                })
                                e.preventDefault()
                              }}
                            >
                              <i className="fab fa-twitter"></i> Twitter
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                  {tab === "description" && (
                    <div className="tab-content">
                      <div className="tab-pane active" id="description">
                        <div className="description-wrap">
                          <h3>{product.name}</h3>
                          <p>{product.desc}</p>
                          <h3>Features</h3>
                          <ul>
                            {product.mobileApp && <li>iOS/Android app</li>}
                            {product.integration.website && (
                              <li>Website integration</li>
                            )}
                            {product.integration.facebook && (
                              <li>Facebook integration</li>
                            )}
                            {product.free && <li>Free package available</li>}
                            {product.feedback && (
                              <li>Client feedback/reviews</li>
                            )}
                            {product.reminders && <li>Reminders</li>}
                            {product.pos && <li>POS hardware integration</li>}
                            {product.onlinePayments && <li>Online payments</li>}
                            {product.customerRetention && (
                              <li>Marketing tools</li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                  {tab === "facebook" && (
                    <div className="tab-content">
                      <div className="tab-pane active" id="facebook">
                        <div className="description-wrap">
                          <div
                            className="fb-page"
                            data-href={product.facebook}
                            data-tabs="timeline"
                            data-width="500"
                            data-height="1000"
                            data-small-header="true"
                            data-adapt-container-width="true"
                            data-hide-cover="true"
                            data-show-facepile="true"
                          >
                            <blockquote
                              cite={product.facebook}
                              className="fb-xfbml-parse-ignore"
                            >
                              <a href={product.facebook}>{product.name}</a>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {tab === "twitter" && (
                    <div className="tab-content">
                      <div className="tab-pane active" id="twitter">
                        <div className="description-wrap">
                          <div id="twitter-timeline"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* <!-- sidebar-area start --> */}
                <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12">
                  <aside>
                    <div className="license-wrap mb-20">
                      <div className="tab-content">
                        <div className="tab-pane fade in active" id="standard">
                          <div className="license-info clear">
                            <h3>
                              Prices{" "}
                              <span className="pull-right">
                                {product.prices}
                              </span>
                            </h3>
                            <ul>
                              <li>
                                <a
                                  href={product.url}
                                  className="button"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Visit Website&nbsp;
                                  <i className="fas fa-external-link-alt"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-information-wrap mb-20">
                      <h3 className="details-title">App Information</h3>
                      <ul>
                        <li>
                          <span>Category</span> Software
                        </li>
                        <li>
                          <span>Platform</span> Cloud
                        </li>
                      </ul>
                    </div>
                    {/* <!-- tag-area --> */}
                    <div className="tag-wrap tag-wrap2">
                      <h3 className="details-title">Tags</h3>
                      <ul>
                        <li>website</li>
                        <li>online booking</li>
                        <li>software</li>
                        <li>sass</li>
                        <li>hair salon</li>
                        <li>barbershop</li>
                        <li>nail salon</li>
                        <li>booth rent</li>
                        <li>hair stylist</li>
                        <li>appointment scheduling</li>
                        <li>booking system</li>
                        <li>spa</li>
                      </ul>
                    </div>
                    {/* <!-- tag-area --> */}
                  </aside>
                </div>
                {/* <!-- sidebar-area end --> */}
              </div>
            </div>
          </div>

          <div className="related-product-area ptb-70 bg-3">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="section-title section-title2">
                    <h2>Similar Products</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="featured-product-active next-prev-style">
                  {ProductsData.products
                    .filter(item => item.product.name !== product.name)
                    .sort(() => (Math.random() < 0.5 ? -1 : 1))
                    .slice(0, 4)
                    .map((item, i) => (
                      <Product
                        key={item.product.name}
                        {...item.product}
                        images={images2}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div id="fb-root"></div>
        </Layout>
      )}
    ></StaticQuery>
  )
}

export default ProductDetail
