import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom'

export class Layout extends Component {
  render() {
    return (
      <div>
        <nav>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/portfolio">Portfolio</Link>
            </li>
        </ul>
        </nav>

        <Outlet />

        <footer>
            <p>Alex Pu</p>
        </footer>
      </div>
    )
  }
}

export default Layout