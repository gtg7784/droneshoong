import React from 'react'
import * as classnames from 'classnames/bind'

import styles from './About.scss'

const cx = classnames.bind(styles)

class About extends React.Component{
  render(){
    return(
      <div className={cx('About')}>

      </div>
    )
  }
}

export default About;