import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Modal from 'react-modal'
import axios from 'axios'
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
            showModal: false,
            id: '',
            pw: ''
        };

        this.onChangeId = this.onChangeId.bind(this)
        this.onChangePw = this.onChangePw.bind(this)
        this.onLogin = this.onLogin.bind(this)
      }
    
      onChangeId = (e) => {
        this.setState({
          id: e.target.value
        })
      }
    
      onChangePw = (e) => {
        this.setState({
          pw: e.target.value
        })
      }

      onLogin = async () => {
        let form = new FormData()
        form.append('username', this.state.id)
        form.append('password', this.state.pw)
    
        await axios.post('/signin/', form)
        .catch(err => {
          console.log(err.response.data);
          alert('아이디 또는 비밀번호가 잘못되었습니다.')
        })
        .then(res => {
          console.log(res)
          if(res && res.status === 200){
            sessionStorage.setItem(
              "userInfo",
              JSON.stringify({
                username: this.state.id,
                password: this.state.pw,
                token: res.data.token
              })
            )
            window.location.replace('/')
          }
        })
      }
    
    componentWillReceiveProps() {
        this.setState({
            showModal: this.props.showModal
        });
    }

    render() {        
        return (
            <Modal isOpen={this.state.showModal} style={customStyles} ariaHideApp={false}>
                <div className={cx('Login')}>
                    <img src={logo} alt=""/>
                    <h3>드론으로 슝에 오신 것을 환영합니다.</h3>
                    <input type="text" placeholder="아이디" onChange={(e) => this.onChangeId(e)}/>
                    <input type="password" placeholder="비밀번호" onChange={(e) => this.onChangePw(e)}/>
                    <Link>비밀번호를 잊으셨나요?</Link>
                    <button>로그인</button>
                    <p>
                        아직 드론으로 슝을 사용하고 있지 않으신가요? 
                        <button onClick={this.props.onRegister}>가입하기</button>
                    </p>
                </div>
            </Modal>
        )
    }
}

export default Login