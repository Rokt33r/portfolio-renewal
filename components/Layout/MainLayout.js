import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

class MainLayout extends React.Component {
  render () {
    const {
      pathname
    } = this.props.router
    return (
      <main id='main'>
        <nav className='gnb'>
          <h1 className='sr-only'>
            메뉴
          </h1>
          <ul>
            <li>
              <Link href='/about'>
                <a className={pathname === '/about' ? 'active' : ''}>
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href='/work'>
                <a className={pathname === '/work' ? 'active' : ''}>
                  Work
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        { this.props.children }
        <style jsx>{`
          #main {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding-left: 16px;
            padding-right: 16px;
          }
          .gnb {
            padding-top: 16px;
          }
          .gnb ul {
            display: flex;
            padding-top: 16px;
            padding-bottom: 32px;
          }
          .gnb li {
            margin-right: 48px;
          }
          .active {
            border-bottom: 2px solid;
          }

          @media screen and (min-width: 400px) {
            #main {
              padding-left: 20px;
              padding-right: 20px;
            }
          }

          @media screen and (min-width: 720px) {
            #main {
              width: 66.6666666666%;
              height: 100vh;
              padding-left: 0;
              padding-right: 0;
            }
            .gnb {
              margin-bottom: 0;
            }
          }
        `}</style>
      </main>
    )
  }
}


export default withRouter(MainLayout)