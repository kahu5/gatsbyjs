import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#333`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
     <div>
              <nav style={{ float: "right", marginTop: `-18px` }}>
                <ul style={{ display: "flex", flex: 1 }}>
                  
                    <li
                     
                      style={{
                        listStyleType: `none`,
                        padding: `1rem`,
                      }}
                    >
                      <Link style={{ color: `white`,textDecoration: 'none',fontWeight: '600' }} to="/about">
                        About
                      </Link>
                    </li>

                    <li
                     
                      style={{
                        listStyleType: `none`,
                        padding: `1rem`,
                      }}
                    >
                      <Link style={{ color: `white`,textDecoration: 'none',fontWeight: '600' }} to="/contact">
                        Contact
                      </Link>
                    </li>

                </ul>
              </nav>
            </div>

    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
