import React from 'react'
import * as classNames from 'classnames/bind'

import styles from './Main.scss'

import Illsut from 'components/Illust/Illust';

import illust_2 from 'assets/illust_2.svg'
import mockup from 'assets/mockup.png'
import playstore from 'assets/playstore.png'
import appstore from 'assets/appstore.png'

import i_box from 'assets/box.svg'

const cx = classNames.bind(styles)

class Main extends React.Component{
  render(){
    return(
      <React.Fragment>
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
            <img src={illust_2} alt=""/>
          </div>
          <div>
            <img src={mockup} alt="" className={cx('mockup')}/>
            <div>
              <h1>
                ‘드론으로 슝’을 <br/>
                앱으로도 만나보세요!
              </h1>
              <p>
                쉽고 빠른 택배 예약부터 드론배송 서비스까지! <br/>
                다양한 맞춤형 서비스를 받아보세요.
              </p>
              <div>
                <img src={playstore} alt=""/>
                <img src={appstore} alt=""/>
              </div>
            </div>
          </div>
        </div>
        <Illsut/>
      </React.Fragment>
    )
  }
}

export default Main;