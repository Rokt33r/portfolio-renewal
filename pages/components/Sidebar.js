import React from 'react'
import Link from 'next/link'

const Sidebar = () => (
  <section className='sidebar'>
    <h1 className='name'>
      roh woohyeon <sup>TM</sup>
    </h1>
    <div className='info'>
      <Link href='mailto:roh.woohyeon@gmail.com'>
        <a>
          roh.woohyeon@gmail.com
        </a>
      </Link>
      <p className='text'>
        Seoul, Republic of Korea
      </p>
    </div>
    <ul className='links'>
      <li>
        <Link href='https://github.com/rohjs'>
          <a>
            Github
          </a>
        </Link>
      </li>
      <li>
        <Link href='https://github.com/rohjs'>
          <a>
            LinkedIn
          </a>
        </Link>
      </li>
    </ul>
    <p className='year'>
      2016/2018 <sup>®</sup>
    </p>
    <style jsx>{`
      .sidebar {
        position: relative;
        height: 100vh;
        padding-top: 16px;
        padding-bottom: 24px;
      }
      .name {
        padding-top: 16px;
        font-size: 20px;
        font-weight: 400;
        line-height: 1.333333333;
      }
      .name sup {
        font-size: 10px;
        font-weight: 700;
      }
      .info {
        margin-top: 138px;
      }
      .links a {
        text-decoration: underline;
      }
      .year {
        position: absolute;
        bottom: 24px;
        left: 0;
      }
      .year sup {
        position: relative;
        top: 3px;
        right: 1px;
        font-size: 20px;
        font-weight: 700;
      }
    `}</style>
  </section>
)

export default Sidebar