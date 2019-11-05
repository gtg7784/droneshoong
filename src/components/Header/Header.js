import React from 'react'
import { Link } from 'react-router-dom'
import * as classNames from 'classnames/bind'

import styles from './Header.scss'

import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'

import logo from '../../assets/logo.svg'

const cx = classNames.bind(styles)

class Header extends React.Component{
  constructor(props){
    this.state = {
      isLogin: false,
      isRegister: false
    }
    
    this.onLogin = this.onLogin.bind(this);
    this.onRegister = this.onRegister.bind(this);
  }

  onLogin = () => {
    const { onLogin } = this.state;
    this.setState({
      isLogin: !onLogin
    })
  }

  onRegister = () => {
    const { isRegister } = this.state;
    this.setState({
      isRegister: !isRegister
    })
  }

  render(){
    const { isLogin, isRegister } = this.state;
    return(
      <React.Fragment>
        {isLogin ? <Login /> : null}
        {isRegister ? <Register /> : null}
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
                <Link onClick={() => this.onLogin()}>로그인 </Link>
                <div/>
                <Link onClick={() => this.onRegister()}>회원가입</Link>
            </div>
          </div>
        </header>
      </React.Fragment>
    )
  }
}

export default Header;