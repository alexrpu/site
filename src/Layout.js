import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom'

export class Layout extends Component {
  render() {
    return (
      <div>
        <nav>
          <div>
            <h1>AP</h1>
          </div>
          <div>
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
          </div>
        </nav>

        <body>
          <Outlet />
        </body>

        <footer>
          <div>
          <h2>Contact</h2>
          <p>Email: alexander.r.pu@gmail.com</p>
          <p>Phone: 604-704-0393</p>
          </div>

          <div>
          <h2>Links</h2>
          <p>Github: </p>
          <p>LinkedIn: </p>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout