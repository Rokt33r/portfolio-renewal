import React from 'react'
import Head from 'next/head'
import AppLayout from '../components/Layout/AppLayout'
import MainLayout from '../components/Layout/MainLayout'
import List from '../components/List'

const workList = {
  'True North': [
    '2016',
  ],
  'Fastcampus': [
    '2017',
    ''
  ],
  'Likelion': [
    '2017'
  ],
  'Insomenia': [
    '2017'
  ],
  'Revisolution': [
    '2017'
  ],
  'Sunday UI': [
    '2018'
  ],
}

class Work extends React.Component {
  handleClick
  render () {
    return (
      <AppLayout>
        <Head>
          <title>works / roh woohyeon®</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <section className='section'>
          <h1 className='sr-only'>Works</h1>
          <ul className='works'>
            {
              // Object
              //   .entries(workList)
              //   .map(([title, contents], index) => {
              //     return <List
              //       key={index}
              //       title={title}
              //       contents={contents}
              //     />
              //   })
            }
          </ul>
          <p>(Updating...)</p>
        </section>
      </AppLayout>
    )
  }
}

export default Work