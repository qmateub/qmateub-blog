import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'

const IndexPage = () => (
  <div className={styles.main}>
    <div className={styles.container}>
      <div className={styles.description}>
        <h1>Quique Mateu Borox</h1>
        <p>
          Full Stack Developer at<a href="https://www.devgurus.io/">
            devgurus.io
          </a>
        </p>
        <p>
          {'Just a place to put quick thoughts on my life as a developer' +
            ', which I loved, specially the journey from when you start learning something to ' +
            'the point that you become really good at that something.'}
        </p>
      </div>
    </div>
  </div>
)

export default IndexPage
