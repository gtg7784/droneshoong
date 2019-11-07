import React from 'react'

import * as classnames from 'classnames/bind'

import styles from './Mobile.scss'

import logo_black from 'assets/logo_black.svg'

const cx = classnames.bind(styles)

class Mobile extends React.Component{
  render(){
    return(
      <div className={cx('Mobile')}>
        <div>
          <img src={logo_black} alt=""/>
          <p>드론으로 슝에 오신 것을 환영합니다.</p>
          <div>
            모바일 접속 시 서비스 진행이 원활하지 않을 수 있습니다. <br/>
            PC의 브라우저로 접속 후 사용해주시면 감사하겠습니다.   
          </div>
          <button>메인화면으로 돌아가기</button>
        </div>
      </div>
    )
  }
}

export default Mobile;