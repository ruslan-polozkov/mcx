import React from "react"
import Link from "next/link";

const Logo = () => {
  return (
    <div className="logo">
      <a href="/">
        <img src="/img/logo.png" alt="Dominoes" style={{marginRight: "1rem"}}/>
        <span>Dominoes</span>
      </a>
    </div>
  )
}

export default Logo
