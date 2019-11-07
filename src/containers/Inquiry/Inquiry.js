import React from 'react'
import * as classnames from 'classnames/bind'

import styles from './Inquiry.scss'

import i_box from 'assets/box.svg'
import i_search from 'assets/search.svg'

const cx = classnames.bind(styles)

class Inquiry extends React.Component{
  render(){
    return(
      <div className={cx('Inquiry')}>
        <div>
          <h1>택배조회</h1>
          <hr/>
          <img src={i_box} alt=""/>
          <p>운송장번호를 입력하시면 배송상태를 확인하실 수 있습니다.</p>
          <div>
            <input type="text" placeholder="‘-‘ 없이 숫자만 입력" />
            <button>
              <img src={i_search} alt=""/>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Inquiry;