import React from 'react'
import * as classnames from 'classnames/bind'

import styles from './Mypage.scss'

const cx = classnames.bind(styles)

class Mypage extends React.Component{
  render(){
    return(
      <div className={cx('Mypage')}>
        <h1>회원정보</h1>
        <div>
          <hr className={cx('start')}/>
          <div>
            <label>아이디</label>
            <div>gtg7784</div>
          </div>
          <hr className={cx('middle')}/>
          <div>
            <label>비밀번호</label>
            <input type="text" />
          </div>
          <hr className={cx('middle')}/>
          <div>
            <label>비밀번호 확인</label>
            <input type="text" />
          </div>
          <hr className={cx('end')}/>
          <hr className={cx('start')}/>
          <div>
            <label>이름</label>
            <input type="text" value="고태건" className={cx('short')}/>
          </div>
          <hr className={cx('middle')}/>
          <div>
            <label>생년월일</label>
            <input type="text" className={cx('birth')} value="2003"/>
            <input type="text" className={cx('birth')} value="08"/>
            <input type="text" className={cx('birth')} value="04"/>
            <input type="checkbox" id="sola"/> <label htmlFor="sola"/> <div className={cx('check')}>양력</div>
            <input type="checkbox" id="luna"/> <label htmlFor="luna"/> <div className={cx('check')}>음력</div>
          </div>
          <hr className={cx('middle')}/>
          <div>
            <label>성별</label>
            <input type="checkbox" id="male"/> <label htmlFor="male"/> <div className={cx('check')}>남</div>
            <input type="checkbox" id="female"/> <label htmlFor="female"/> <div className={cx('check')}>여</div>
          </div>
          <hr className={cx('middle')}/>
          <div>
            <label>전화번호</label>
            <input type="text" className={cx('phone')} value="010"/>
            <div className={cx('phone_label')}>-</div>
            <input type="text" className={cx('phone')} value="3901"/>
            <div className={cx('phone_label')}>-</div>
            <input type="text" className={cx('phone')} value="8488"/>
          </div>
          <hr className={cx('middle')}/>
          <div>
            <label>이메일</label>
            <input type="text" value="tae.gun7784@gmail.com"/>
          </div>
          <hr className={cx('middle')}/>
          <div>
            <label>주소</label>
            <div className={cx('address')}>
              <div>
                <input type="text" className={cx('short')} value="04314"/>
                <button>주소 검색</button>
              </div>
              <input type="text" className={cx('long')} value="서울특별시 용산구 원효로97길 33-4"/>
              <input type="text" className={cx('long')} placeholder="상세주소" value="(선린중학교,선린인터넷고등학교)"/>
            </div>
          </div>
          <hr className={cx('end')} />
        </div>
      </div>
    )
  }
}

export default Mypage;