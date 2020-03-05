import React, { useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
const netlifyIdentity = require("netlify-identity-widget")

const Header = ({ siteTitle }) => {
  useEffect(() => {
    netlifyIdentity.init()
  }, [])

  const netlifyAuth = {
    isAuthenticated: false,
    user: null,
    authenticate(callback) {
      this.isAuthenticated = true
      netlifyIdentity.open()
      netlifyIdentity.on("login", user => {
        this.user = user
        callback(user)
      })
    },
    signout(callback) {
      this.isAuthenticated = false
      netlifyIdentity.logout()
      netlifyIdentity.on("logout", () => {
        this.user = null
        callback()
      })
    },
  }

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div data-netlify-identity-button>Login</div>
      <button onClick={netlifyAuth.authenticate()}>Login</button>
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
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
