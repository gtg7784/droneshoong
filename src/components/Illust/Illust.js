import React from 'react'
import * as classnames from 'classnames/bind'

import styles from './Illust.scss'

import illust_0 from 'assets/illust_0.svg'
import illust_1 from 'assets/illust_1.svg'
import illust_3 from 'assets/illust_3.svg'

const cx = classnames.bind(styles)

class Illust extends React.Component{
  render(){
    return(
      <div className={cx('Illust')}>
        <img src={illust_0} alt="" className={cx('illust_0')}/>
        <img src={illust_1} alt="" className={cx('illust_1')}/>
        <img src={illust_3} alt="" className={cx('illust_3')}/>
      </div>
    )
  }
}

export default Illust;