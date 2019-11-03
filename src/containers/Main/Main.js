import React from 'react'
import * as classNames from 'classnames/bind'

import styles from './Main.scss'

import i_box from '../../assets/box.svg'

const cx = classNames.bind(styles)

class Main extends React.Component{
  render(){
    return(
      <div className={cx('Main')}>
        <div>
          <div>
            <h1>환영합니다!</h1>
            <p>
            신속 편리한 드론택배 서비스 <br/>
            ‘드론으로 슝’입니다.
            </p>
            <div>
              <img src={i_box} alt=""/>
              <div>택배조회</div>
              <div/>
              <input type="text" placeholder="운송장 번호를 입력하세요."/>
            </div>
          </div>
          <div/>
        </div>
        <div className={cx('backTransform')} />
        <div className={cx('backWhite')}/>
      </div>
    )
  }
}

export default Main;