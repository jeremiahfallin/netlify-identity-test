import React, { useEffect } from "react"
import Protected from "./Protected"
import Public from "./Public"
import netlifyIdentity from "netlify-identity-widget"
import { Router, Route, Link, Redirect, createHistory } from "@reach/router"

// copied straight from https://reacttraining.com/react-router/web/example/auth-workflow
////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

const AuthExample = () => {
  useEffect(() => {}, [])

  const login = () => {
    netlifyIdentity.open()
    netlifyIdentity.on("login", user => console.log("login", user))
  }
  return (
    <>
      <button onClick={e => login()}>Log in</button>
      <Protected />
    </>
  )
}

// const AuthExample = () => {
//   return (
//     <div>
//       <AuthButton />
//       <ul>
//         <li>
//           <Link to="/public">Public Page</Link>
//         </li>
//         <li>
//           <Link to="/protected">Protected Page</Link>
//         </li>
//       </ul>
//       <RouterPaths />
//     </div>
//   )
// }

// const RouterPaths = () => {
//   return (
//     <Router>
//       <Public path="/public" />
//       <Login path="/login" />
//       <Protected path="/protected" />
//     </Router>
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

// const AuthButton = () => {
//   return netlifyAuth.isAuthenticated ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           netlifyAuth.signout(() => createHistory("/"))
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   )
// }

// function PrivateRoute({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         netlifyAuth.isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: props.location },
//             }}
//           />
//         )
//       }
//     />
//   )
// }

// class Login extends React.Component {
//   state = { redirectToReferrer: false }

//   login = () => {
//     netlifyAuth.authenticate(() => {
//       this.setState({ redirectToReferrer: true })
//     })
//   }

//   render() {
//     let { from } = this.props.location.state || { from: { pathname: "/" } }
//     let { redirectToReferrer } = this.state

//     if (redirectToReferrer) return <Redirect to={from} />

//     return (
//       <div>
//         <p>You must log in to view the page at {from.pathname}</p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     )
//   }
// }

export default AuthExample
