import React, { useEffect } from "react"
import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import { useIdentityContext } from "react-netlify-identity-widget"
const netlifyIdentity = require("netlify-identity-widget")

const Header = () => {
  const { user, isLoggedIn, logoutUser } = useIdentityContext()
  let message = isLoggedIn
    ? `Hello, ${user.user_metadata && user.user_metadata.full_name}`
    : "You are not logged in"
  const handleClick = async event => {
    event.preventDefault()
    await logoutUser()
    navigate(`/login`)
  }
  return (
    <div>
      <span>{message}</span>
      <nav>
        {/* <span>Navigate the app: </span>
        <Link to="/app/">Main</Link>
        <Link to="/app/profile">Profile</Link>
        {isLoggedIn ? (
          <a href="/" onClick={handleClick}>
            Logout
          </a>
        ) : (
          <Link to="/app/login">Login</Link>
        )} */}
        <button onClick={netlifyIdentity.open("login")}>Login</button>
      </nav>
    </div>
  )
}

// const Header = ({ siteTitle }) => {
//   useEffect(() => {
//     netlifyIdentity.init()
//   }, [])

//   return (
//     <header
//       style={{
//         background: `rebeccapurple`,
//         marginBottom: `1.45rem`,
//       }}
//     >
//       <div data-netlify-identity-button>Login</div>
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `1.45rem 1.0875rem`,
//         }}
//       >
//         <h1 style={{ margin: 0 }}>
//           <Link
//             to="/"
//             style={{
//               color: `white`,
//               textDecoration: `none`,
//             }}
//           >
//             {siteTitle}
//           </Link>
//         </h1>
//       </div>
//     </header>
//   )
// }

// const netlifyAuth = {
//   isAuthenticated: false,
//   user: null,
//   authenticate(callback) {
//     this.isAuthenticated = true
//     netlifyIdentity.open()
//     netlifyIdentity.on("login", user => {
//       this.user = user
//       callback(user)
//     })
//   },
//   signout(callback) {
//     this.isAuthenticated = false
//     netlifyIdentity.logout()
//     netlifyIdentity.on("logout", () => {
//       this.user = null
//       callback()
//     })
//   },
// }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
