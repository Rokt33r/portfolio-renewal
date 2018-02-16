import React from 'react'
import Head from 'next/head'
import AppLayout from '../components/Layout/AppLayout'
import MainLayout from '../components/Layout/MainLayout'
import List from '../components/List'

const aboutList = {
  'Languages': [
    'Korean',
    'English'
  ],
  'Skills': [
    'HTML, CSS, Javascript, ES6+, TypeScript',
    'React, Redux, Redux Saga',
    'Webpack',
    'Node',
    'Express, MongoDB',
  ],
  'Work experience': [
    'UI/UX designer at True North / 2016',
    'TA at Fastcampus Frontend Development School program / 2017',
    'UI/UX designer & Frontend developer at Likelion / 2017',
    'Frontend Dev. lecturer at Likelion / 2017',
    'Designer & UI Developer at Insomenia / 2017',
    'UX Developer at Revisolution PBC / 2017',
    'Sticker distributor at Dingco Sticker / 2018',
    'Youtuber at Sunday UI / 2018',
  ],
  'Other': [
    'IT volunteer at World Friends IT Korea / San Lorenzo, Paraguay / 2014',
    'Promotion director at TEDxSogangU / 2014',
    'Director at TEDxSogangU / 2015',
    '1st Prize / Imagination Content at Sogang Univ. / 2015',
  ],
}

class About extends React.Component {
  handleClick
  render () {
    return (
      <AppLayout>
        <Head>
          <title>about / roh woohyeon®</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <section className='section'>
          <h1 className='sr-only'>About</h1>
          <p>
            Hello, I’m Woohyeon Roh, a UI/UX developer based in South Korea. For past 3+ years, I've worked as a both designer and frontend developer with a UX driven background. Typography passionate, clean and pure code pursuing, I bridge the gap between design and development. I am able to quickly adapt to new challenges. Being quite hands-on, I enjoy getting involved in the whole process, starting from ideation and conceptualizing to designing, prototyping, and building. I also love learning new stuffs and endeavor to quickly follow latest trend of technology.
          </p>
          <ul className='skill'>
            {
              Object
                .entries(aboutList)
                .map(([title, contents], index) => {
                  return <List
                    key={index}
                    title={title}
                    contents={contents}
                  />
                })
            }
          </ul>
        </section>
        <style jsx>{`

        `}</style>
      </AppLayout>
    )
  }
}

export default About