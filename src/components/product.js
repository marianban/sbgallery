import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

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

export const Product = ({ name, img, stars, prices, images }) => {
  const url = `/app/${slugify(name)}/`

  return (
    <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12">
      <div className="product-item mb-20">
        <div className="product-img">
          <Img
            fluid={findImage(images, img)}
            style={{ minHeight: "150px" }}
            imgStyle={{ objectPosition: "0% 0%" }}
          />
          <a href={url} className="link">
            <i className="fa fa-link"></i>
          </a>
          <a href="/" className="wishlist">
            <i className="fa fa-heart"></i>
          </a>
        </div>
        <div className="product-content">
          <h3>
            <a href={url}>{name}</a>
          </h3>
          <span>
            in <strong>Salon &amp; Barber Software</strong>
          </span>
          <div className="product-meta">
            <ul>
              <li>
                {Array.from({ length: stars }, () => (
                  <i className="fa fa-star"></i>
                ))}
              </li>
              <li>
                <span>{prices}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

Product.defaultProps = {
  stars: 4,
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  stars: PropTypes.number,
  prices: PropTypes.string.isRequired,
}

function slugify(string) {
  const a =
    "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;"
  const b =
    "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------"
  const p = new RegExp(a.split("").join("|"), "g")

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, "") // Trim - from end of text
}
