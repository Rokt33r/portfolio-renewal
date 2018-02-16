import React from 'react'
import Sidebar from '../Sidebar'
import MainLayout from './MainLayout'

const AppLayout = (props) => {
  return (
    <div id='app'>
      <Sidebar />
      <MainLayout>
        { props.children }
      </MainLayout>
      <style global jsx>{`
        * {
          margin: 0;
          box-sizing: border-box;
          color: #292b2c;
          font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
          letter-spacing: -.01em;
        }

        html {
          font-size: 15px;
          line-height: 1.45;
        }

        p {
          margin-bottom: 1rem;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        a:hover {
          border-bottom: 2px solid;
        }

        ul,
        ol {
          list-style-type: none;
          padding-left: 0;
        }

        .sr-only {
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }

        #app {
          padding-left: 50px;
          padding-right: 50px;
        }

        @media screen and (min-width: 720px) {
          #app {
            display: flex;
            height: 100vh;
            align-items: stretch;
            overflow: hidden;
          }
        }

        @media screen and (min-width: 960px) {
          html {
            font-size: 20px;
            line-height: 1.333333333;
          }
        }
    `}</style>
    </div>
  )
}

export default AppLayout