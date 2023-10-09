import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom'

export class Layout extends Component {
  render() {
    return (
      <div class="flex flex-col h-screen text-text text-xl font-bold">
        <nav class="p-2 px-8 bg-background">
          <div class="float-left p-2">
            <h1>AP</h1>
          </div>
          <div class="float-right py-2">
            <ul class="flex space-x-10">
                <li class="hover:text-primary">
                <Link to="/">Home</Link>
                </li>
                {/* <li class="hover:text-primary">
                <Link to="/about">About</Link>
                </li> */}
                <li class="hover:text-primary">
                <Link to="/portfolio">Portfolio</Link>
                </li>
            </ul>
          </div>
        </nav>

        <body class="flex-grow overflow-auto bg-gradient-to-t from-background via-secondary to-background">
          <Outlet />
        </body>

        <footer class="py-5 px-8 justify-end space-x-8 bg-background">
          <a href="mailto:alexander.r.pu@gmail.com"><i class="fa-solid fa-square-envelope fa-xl hover:text-primary"></i></a>
          <a href='https://www.linkedin.com/in/alexanderpu'><i class="fa-brands fa-linkedin fa-xl hover:text-primary"></i></a>
          <a href='https://github.com/alexrpu'><i class="fa-brands fa-square-github fa-xl hover:text-primary"></i></a>
        </footer>
      </div>
    )
  }
}

export default Layout
