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
            <input type="text" className={cx('short')}/>
            <div className={cx('label')}>만원</div>
          </div>
          <hr className={cx('middle')}/>
          <div>
            <label>등록정보</label>
            <input type="text" placeholder="등록정보"/>
            <p>✱ 예약을 식별할 수 있는 명칭을 설정하십시오.</p>
            <span>예) 친구 선물</span>
          </div>
          <hr className={cx('end')}/>
          <p>✱ 물품 가액이 50만원을 초과시 고가 할증운임 2,000원이 추가 되며 100만원 이상은 접수 불가합니다.</p>
          <p>✱ 권역에 따른 배송비 산정은 물품을 발송하는 출발지의 위치 기준함. (보내는분 주소기준이 아님)</p>
          <p>✱ 물품가액은 배송사고 시 보상의 기준이 되며, 허위 기재시 배송 과정에서 불이익이 발생할 수 있으니 실제 물품의 가치를 정확히 기재바랍니다.</p>
          <h2>보내는 분</h2>
          <hr className={cx('start')}/>
          <div>
            <label>주소선택</label>
            <input type="checkbox" id="info0"/> <label htmlFor="info0"/> <div className={cx('check')}>회원 정보와 동일</div>
            <input type="checkbox" id="info1"/> <label htmlFor="info1"/> <div className={cx('check')}>새로운 주소</div>
          </div>
          <hr className={cx('middle')}/>
          <div>
            <label>이름</label>
            <input type="text" placeholder="이름" className={cx('short')}/>
          </div>
          <hr className={cx('middle')}/>
          <div>
            <label>전화번호</label>
            <input type="text" />
          </div>
          <hr className={cx('middle')}/>
          <div>
            <label>
              예약번호 수신용 <br/> 전화번호
            </label>
            <div>
              <div>
                <input type="text" />
                <p>예약번호는 택배 발송시 꼭 필요하오니 잘 보관하여 주시기 바랍니다.</p>
              </div>
              <div>
            <input type="checkbox" id="sameuser"/> <label htmlFor="sameuser"/> <div className={cx('sameuser')}> 보내는 분 휴대폰 번호와 동일 (예약번호 안내 메시지 발송 시에만 사용됩니다)</div>
              </div>
            </div>
          </div>
          <hr className={cx('middle')}/>
          <div>
            <label>주소</label>
            <div className={cx('address')}>
              <div>
                <input type="text" className={cx('short')}/>
                <button>주소 검색</button>
              </div>
              <input type="text" className={cx('long')}/>
              <input type="text" className={cx('long')} placeholder="상세주소"/>
            </div>
          </div>
          <hr className={cx('middle')} />
          <div>
            <label>배송요청사항</label>
            <input type="text" placeholder="배송요청사항"/>
          </div>
          <hr className={cx('end')}/>
          <h2>
            보내는 분
            <span>
              <div className={cx('star')}>✱</div>
               는 필수 입력입니다.
            </span>
          </h2>
          <hr className={cx('start')}/>
          <div>
            <label>
              이름
              <div className={cx('star')}>✱</div>
            </label>
            <input type="text" placeholder="이름" className={cx('short')}/>
          </div>
          <hr className={cx('middle')}/>
          <div>
            <label>
              전화번호
              <div className={cx('star')}>✱</div>
            </label>
            <input type="text" />
          </div>
          <hr className={cx('middle')}/>
          <div>
            <label>주소</label>
            <div className={cx('address')}>
              <div>
                <input type="text" className={cx('short')}/>
                <button>주소 검색</button>
              </div>
              <input type="text" className={cx('long')}/>
              <input type="text" className={cx('long')} placeholder="상세주소"/>
            </div>
          </div>
          <hr className={cx('middle')}/>
          <div>
            <label>
              지불방법
              <div className={cx('star')}>✱</div>
            </label>
            <select>
              <option value="">지불방법</option>
              <option value="prepaid">선불</option>
              <option value="afterpay">후불</option>
            </select>
          </div>
          <hr className={cx('end')}/>
        </div>
      </div>
    )
  }
}

export default Reservation;