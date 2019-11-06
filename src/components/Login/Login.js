import React from 'react'
import * as classnames from 'classnames/bind'

import styles from './Login.scss'

const cx = classnames.bind(styles)

class Login extends React.Component{
  render(){
    return(
      <div className={cx('Login')}>
        Login
      </div>
    )
  }
}

export default Login