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
    super(props);
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
          <Link to='/'>
            <img src={logo} alt=""/>
          </Link>
          <div>
            <ul>
              <li>
                <Link to='/about'>서비스 소개</Link>
              </li>
              <li>
                <Link to='/reservation'>택배 예약</Link>
              </li>
              <li>
                <Link to='/inquiry'>택배 조회</Link>
              </li>
              <li>
                <Link to='/mypage'>회원정보</Link>
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