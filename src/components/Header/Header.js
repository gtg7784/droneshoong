import React from 'react'
import { Link } from 'react-router-dom'
import * as classNames from 'classnames/bind'

import styles from './Header.scss'

import logo from '../../assets/logo.svg'

const cx = classNames.bind(styles)

class Header extends React.Component{
  render(){
    return(
      <header className={cx('header')}>
        <Link>
          <img src={logo} alt=""/>
        </Link>
        <div>
          <ul>
            <li>
              <Link>서비스 소개</Link>
            </li>
            <li>
              <Link>개인택배</Link>
            </li>
            <li>
              <Link>물품리스트</Link>
            </li>
            <li>
              <Link>택배 추적 기능</Link>
            </li>
            <li>
              <Link>회원정보</Link>
            </li>
          </ul>
          <div>
              <Link>로그인 </Link>
              <div/>
              <Link>회원가입</Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;