import React from 'react'

import * as classnames from 'classnames/bind'

import styles from './Notfound.scss'

import notfound from 'assets/notfound.png'

const cx = classnames.bind(styles)

class Notfound extends React.Component{
  render(){
    return(
      <div className={cx('Notfound')}>
        <div>
          <img src={notfound} alt=""/>
          <p>페이지를 찾을 수 없습니다.</p>
          <button>메인화면으로 돌아가기</button>
        </div>
      </div>
    )
  }
}

export default Notfound;