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

        button {
          padding: 0;
          border: none;
          border-radius: 0;
          font-size: 15px;
          line-height: 1.45;
          background: transparent;
          box-shadow: none;
          cursor: pointer;
        }

        button:hover,
        button:focus,
        button:active {
          outline: none;
          box-shadow: none;
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

        @media screen and (min-width: 720px) {
          #app {
            display: flex;
            height: 100vh;
            align-items: stretch;
            overflow: hidden;
          }

          .section {
            padding-top: 17px;
            padding-right: 50px;
            padding-bottom: 32px;
            overflow: auto;
          }
        }

        @media screen and (min-width: 960px) {
          html {
            font-size: 20px;
            line-height: 1.333333333;
          }

          button {
            font-size: 20px;
            line-height: 1.333333333;
          }

          .section {
            padding-top: 104px;
          }
        }
    `}</style>
    </div>
  )
}

export default AppLayout