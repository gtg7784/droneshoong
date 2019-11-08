import React, { Component } from 'react'
import Modal from 'react-modal'

import * as classNames from 'classnames/bind'

import styles from './Register.scss'

import logo from 'assets/logo_black.svg'

const cx = classNames.bind(styles)
 
const customStyles = {
    content : {
        top : '50%',
        left : '50%',
        right : 'auto',
        bottom : 'auto',
        marginRight : '-50%',
        transform: 'translate(-50%, -50%)',
        border: '0px solid #000',
        width: 'calc(78vw - 60px)',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.3)',
        paddingTop: '150px'
    }
};

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            next: false
        };
    }
    
    componentWillReceiveProps() {
        this.setState({
            showModal: this.props.showModal
        });
    }

    render() {   
        const { next } = this.state;     
        return (
            <Modal isOpen={this.state.showModal} style={customStyles} ariaHideApp={false}>
                <div className={cx('Register1')} style={next ? {display: "none" } : {display: "flex"}}>
                    <img src={logo} alt=""/>
                    <p>드론으로 슝에 오신 것을 환영합니다. </p>
                    <div>
                        <div>
                            <label htmlFor="">이메일</label>
                            <input type="text"/>
                            <label htmlFor="">생년월일</label>
                            <input type="text"/>
                        </div>
                        <div>
                            <label htmlFor="">성별</label>
                            <input type="text"/>
                            <label htmlFor="">전화번호</label>
                            <input type="text" placeholder="01012345678"/> 
                        </div>
                    </div>
                    <button onClick={() => this.onNext()}>다음 단계</button>
                </div>
                <div className={cx('Register2')} style={next ? {display: "flex" } : {display: "none"}}>
                    <img src={logo} alt=""/>
                    <p>드론으로 슝에 오신 것을 환영합니다. </p>
                    <div>
                        <div>
                            <label htmlFor="">아이디</label>
                            <input type="text"/>
                            <label htmlFor="">비밀번호</label>
                            <input type="password"/>
                            <label htmlFor="">비밀번호 확인</label>
                            <input type="password"/>
                        </div>
                        <div>
                            <label htmlFor="">주소</label>
                            <div>
                                <div>
                                    <input type="text"/>
                                    <button>주소검색</button>
                                </div>
                                <input type="text"/>
                                <input type="text" placeholder="상세 주소"/>
                            </div>
                        </div>
                    </div>
                    <button>가입하기</button>
                </div>
            </Modal>
        )
    }
}

export default Register