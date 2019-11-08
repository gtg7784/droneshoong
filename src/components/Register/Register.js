import React, { Component } from 'react'
import Modal from 'react-modal'

import * as classNames from 'classnames/bind'

import styles from './Register.scss'

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
                <div className={cx('Register')}>
                </div>
            </Modal>
        )
    }
}

export default Register