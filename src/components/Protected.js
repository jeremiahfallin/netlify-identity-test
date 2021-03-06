import React from "react"
import netlifyIdentity from "netlify-identity-widget"

export default function Protected({ user }) {
  return (
    <div>
      <h3>Protected Page</h3>
      {user && user.email && (
        <>
          You are logged in as <b>{user.email}</b>
        </>
      )}
    </div>
  )
}
