import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-home">Home</Link>
      <ul className="site-other">
        <CustomLink to="/ToDo">To-Do</CustomLink>
        <CustomLink to="/Video">Video</CustomLink>
        <CustomLink to="/Cards">Cards</CustomLink>
        <CustomLink to="/About">About</CustomLink>
        <CustomLink to="/Contact">Contact</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}