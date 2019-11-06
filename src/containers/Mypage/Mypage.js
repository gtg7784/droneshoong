import React from 'react'
import * as classnames from 'classnames/bind'

import styles from './Mypage.scss'

const cx = classnames.bind(styles)

class Mypage extends React.Component{
  render(){
    return(
      <div className={cx('Mypage')}>

      </div>
    )
  }
}

export default Mypage;