import React from 'react'
import * as classnames from 'classnames/bind'

import styles from './Lookup.scss'

const cx = classnames.bind(styles)

class Lookup extends React.Component{
  render(){
    return(
      <div className={cx('Lookup')}>
        <h1>택배조회</h1>
        <hr className={cx('start')}/>
        <p>상품 상태 확인</p>
        <div>
          
        </div>
      </div>
    )
  }
}

export default Lookup;