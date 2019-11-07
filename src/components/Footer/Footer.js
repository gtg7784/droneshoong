import React from 'react'
import { Link } from 'react-router-dom'
import * as classNames from 'classnames/bind'

import styles from './Footer.scss'

import logo_black from 'assets/logo_black.svg'

const cx = classNames.bind(styles)

class Footer extends React.Component{
  render(){
    return(
      <div className={cx('footer')}>
        <div>
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
          <div/>
        </div>
        <div>
          <div>
            <div>
              주소 <div/> 서울특별시 용산구 청파동 원효로97길 33-4 대표이사 <div/> 연우공주 외 3명
            </div>
            <div>
              대표전화 <div/> 02-713-6211 이메일 <div/>droneshoong@gmail.com <div/> Copyright 2019. droneshoong. All rights reserved.
            </div>
          </div>
          <img src={logo_black} alt=""/>
        </div>
      </div>
    )
  }
}

export default Footer;