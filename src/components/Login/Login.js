import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Modal from 'react-modal'

import * as classNames from 'classnames/bind'

import styles from './Login.scss'

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

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    componentWillReceiveProps() {
        this.setState({
            showModal: this.props.showModal,
            modalInfo: this.props.modalInfo
        });
    }
    
    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {        
        return (
            <Modal isOpen={this.state.showModal} style={customStyles} ariaHideApp={false}>
                <div className={cx('Login')}>
                    <img src={logo} alt=""/>
                    <h3>드론으로 슝에 오신 것을 환영합니다.</h3>
                    <input type="text" placeholder="이메일"/>
                    <input type="password" placeholder="이메일"/>
                    <Link>비밀번호를 잊으셨나요?</Link>
                    <button>로그인</button>
                    <p>
                        아직 드론으로 슝을 사용하고 있지 않으신가요? 
                        <button>가입하기</button>
                    </p>
                </div>
            </Modal>
        )
    }
}

export default Login