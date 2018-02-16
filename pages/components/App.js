import React from 'react'
import Sidebar from './Sidebar'

const App = () => {
  return (
    <div id='app'>
      <Sidebar />
      <style global jsx>{`
        * {
          margin: 0;
          box-sizing: border-box;
          color: #292b2c;
          font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
          letter-spacing: -.01em;
        }

        html {
          font-size: 20px;
          line-height: 1.333333333;
        }

        p {
          margin-bottom: 1rem;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        a:hover {
          text-decoration: underline;
        }

        ul,
        ol {
          list-style-type: none;
          padding-left: 0;
        }

        #app {
          padding-left: 50px;
          padding-right: 50px;
        }
    `}</style>
    </div>
  )
}

export default App