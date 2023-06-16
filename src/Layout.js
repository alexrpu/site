import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom'

export class Layout extends Component {
  render() {
    return (
      <div class="flex flex-col h-screen text-4xl font-bold">
        <nav class="flow-root p-4 px-10 border-b border-black">
          <div class="float-left p-2">
            <h1>AP</h1>
          </div>
          <div class="float-right py-2">
            <ul class="flex space-x-10">
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

        <body class="flex flex-1 items-center justify-center">
          <Outlet />
        </body>

        <footer class="flex py-5 px-8 justify-end space-x-8">
          <a href="mailto:alexander.r.pu@gmail.com"><i class="fa-solid fa-square-envelope fa-lg"></i></a>
          <a href='https://www.linkedin.com/in/alexanderpu'><i class="fa-brands fa-linkedin fa-lg"></i></a>
          <a href='https://github.com/alexrpu'><i class="fa-brands fa-square-github fa-lg"></i></a>
        </footer>
      </div>
    )
  }
}

export default Layout
