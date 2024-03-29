import React from "react"
import ProductsData from "../content/products.yaml"
import { Product } from "./product"

const products = ProductsData.products

export const Products = ({ images }) => (
  <div className="our-project-area ptb-70 bg-3">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 col-xs-12">
          <div className="section-title text-center">
            <h2 id="Discover">Discover Our Products</h2>
            <p>
              We carefully review new entries from our community one by one to
              make sure they meet high-quality products and functionality
              standards.
            </p>
          </div>
        </div>
      </div>
      {/*
      <div className="row">
        <div className="col-xs-12">
          <div className="tab-menu text-center">
            <ul>
              <li className="active">
                <a href="#popular" data-toggle="tab">
                  Popular
                </a>
              </li>
              <li>
                <a href="#featured" data-toggle="tab">
                  Featured
                </a>
              </li>
              <li>
                <a href="#following" data-toggle="tab">
                  Following
                </a>
              </li>
              <li>
                <a href="#recent" data-toggle="tab">
                  Recent
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      */}
      <div className="row">
        <div className="col-xs-12">
          <div className="tab-content">
            <div className="tab-pane active" id="popular">
              <div className="row">
                {products.map(({ product }, i) => (
                  <Product key={product.name} {...product} images={images} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
