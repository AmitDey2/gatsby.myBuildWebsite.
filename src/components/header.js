import React from 'react'
import Link from 'gatsby-link'



const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h3 style={{ position: "absolute",right:"250px", top:"25px" }}>
        <Link
          to="/about/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          About Us
        </Link>
      </h3>
      <h3 style={{ position: "absolute",right:"80px", top:"25px" }}>
        <Link
          to="/products/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Products
        </Link>
      </h3>
    </div>
  </div>
)

export default Header
