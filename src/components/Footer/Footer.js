import React from 'react'
import { Link } from 'react-router-dom'
import * as classNames from 'classnames/bind'

import styles from './Footer.scss'

import logo_black from 'assets/logo_black.svg'

const cx = classNames.bind(styles)

class Footer extends React.Component{
  render(){
    return(
      <footer className={cx('footer')}>
        <div>
          <ul>
            <li>
              <Link>개인정보처리방침</Link>
            </li>
            <li>
              <Link>이메일무단수집거부</Link>
            </li>
            <li>
              <Link>이용약관</Link>
            </li>
            <li>
              <Link>택배표준약관</Link>
            </li>
          </ul>
        </div>
        <img src={logo_black} alt=""/>
      </footer>
    )
  }
}

export default Footer;