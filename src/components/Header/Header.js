import React from 'react'
import { Link } from 'react-router-dom'
import * as classNames from 'classnames/bind'

import styles from './Header.scss'

import Login from 'components/Login/Login'
import Register from 'components/Register/Register'

import logo from 'assets/logo.svg'

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
    const { isLogin } = this.state;
    this.setState({
      isLogin: true,
      isRegister: false
    })
    console.log(isLogin)
  }

  onRegister = () => {
    const { isRegister } = this.state;
    this.setState({
      isRegister: true,
      isLogin: false
    })
    console.log(isRegister)
  }

  render(){
    const { isLogin, isRegister } = this.state;
    const { pathname } = this.props
    return(
      <React.Fragment>
        <Login showModal={isLogin} onRegister={this.onRegister}/>
        <Register showModal={isRegister}/>
        <header className={cx('header')} style={pathname === "/" ? {backgroundColor: "transparent"} : {backgroundColor: "#5270ff"}}>
          <Link to='/'>
            <img src={logo} alt=""/>
          </Link>
          <div>
            <ul>
              <li>
                <Link to='/' style={pathname === "/" ? {color: "#303030"} : {color: "#ffffff"}}>서비스 소개</Link>
              </li>
              <li>
                <Link to='/reservation' style={pathname === "/" ? {color: "#303030"} : {color: "#ffffff"}}>택배 예약</Link>
              </li>
              <li>
                <Link to='/inquiry' style={pathname === "/" ? {color: "#303030"} : {color: "#ffffff"}}>택배 조회</Link>
              </li>
              <li>
                <Link to='/mypage' style={pathname === "/" ? {color: "#303030"} : {color: "#ffffff"}}>회원정보</Link>
              </li>
            </ul>
            <div>
                <Link onClick={() => this.onLogin()} style={pathname === "/" ? {color: "#000000"} : {color: "#ffffff"}}>로그인 </Link>
                <div style={pathname === "/" ? {backgroundColor: "#303030"} : {backgroundColor: "#ffffff"}} />
                <Link onClick={() => this.onRegister()} style={pathname === "/" ? {color: "#303030"} : {color: "#ffffff"}}>회원가입</Link>
            </div>
          </div>
        </header>
      </React.Fragment>
    )
  }
}

export default Header;