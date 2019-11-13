import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Helmet from "react-helmet"
import Layout from "../components/layout"

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

const Product = ({ pageContext }) => {
  const { product } = pageContext
  const [tab, setTab] = useState("description")
  console.log(product)

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
        }
      `}
      render={({ images }) => (
        <Layout>
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

                  {product.facebook && (
                    <div className="product-details-menu">
                      <ul>
                        <li className={tab === "description" && "active"}>
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
                        <li className={tab === "facebook" && "active"}>
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
                            Facebook
                          </a>
                        </li>
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
                            class="fb-page"
                            data-href={product.facebook}
                            data-tabs="timeline"
                            data-width=""
                            data-height=""
                            data-small-header="true"
                            data-adapt-container-width="true"
                            data-hide-cover="true"
                            data-show-facepile="true"
                          >
                            <blockquote
                              cite={product.facebook}
                              class="fb-xfbml-parse-ignore"
                            >
                              <a href={product.facebook}>{product.name}</a>
                            </blockquote>
                          </div>
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
                                  <i class="fas fa-external-link-alt"></i>
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

          <div id="fb-root"></div>
        </Layout>
      )}
    ></StaticQuery>
  )
}

export default Product
