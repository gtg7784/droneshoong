import React from 'react'
import * as classNames from 'classnames/bind'

import styles from './Footer.scss'

const cx = classNames.bind(styles)

class Footer extends React.Component{
  render(){
    return(
      <footer className={cx('footer')}>

      </footer>
    )
  }
}

export default Footer;