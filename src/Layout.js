import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom'

export class Layout extends Component {
  render() {
    return (
      <div class="flex flex-col bg-gray-900 text-blue-300 h-screen text-4xl font-bold">
        <nav class="flow-root p-2">
          <div class="float-left p-2">
            <h1>AP</h1>
          </div>
          <div class="float-right p-2">
            <ul class="flex space-x-4">
                <li class="hover:text-blue-400">
                <Link to="/">Home</Link>
                </li>
                <li class="hover:text-blue-400">
                <Link to="/about">About</Link>
                </li>
                <li class="hover:text-blue-400">
                <Link to="/portfolio">Portfolio</Link>
                </li>
            </ul>
          </div>
        </nav>

        <body class="flex-1 text-center">
          <Outlet />
        </body>

        <footer class="flex p-2">
          <div class="flex-1 p-2">
          <h2>Contact</h2>
          <p>Email: alexander.r.pu@gmail.com</p>
          <p>Phone: 604-704-0393</p>
          </div>

          <div class="flex-1 p-2">
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
