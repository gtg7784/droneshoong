import React from 'react'
import * as classnames from 'classnames/bind'

import styles from './Reservation.scss'

const cx = classnames.bind(styles)

class Reservation extends React.Component{
  render(){
    return(
      <div className={cx('Reservation')}>
        <h1>택배예약</h1>
        <div>
          <h2>물품정보</h2>
          <hr className={cx('start')}/>
          <div>
            <label>물품선택</label>
            <select>
              <option value="">품목선택</option>
              <option value="01">의류</option>
              <option value="02">서신/서류</option>
              <option value="03">가전제품류</option>
              <option value="04">과일류</option>
              <option value="05">곡물류</option>
              <option value="06">한약류</option>
              <option value="07">식품류</option>
              <option value="08">잡화/서적</option>
            </select>
          </div>
          <hr className={cx('middle')}/>
          <div>
            <label>물품가액</label>
            <input type="text"/>
            <div className={cx('won')}>만원</div>
          </div>
          <hr className={cx('middle')}/>
          <div>
            <label>물품가액</label>
            <input type="text"/>
          </div>
          <hr className={cx('end')}/>
        </div>

      </div>
    )
  }
}

export default Reservation;