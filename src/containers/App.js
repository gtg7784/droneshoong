import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import axios from 'axios'
import * as classNames from 'classnames/bind'

import styles from './App.scss';

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';

import Main from './Main/Main';
import Reservation from './Reservation/Reservation';
import Inquiry from './Inquiry/Inquiry';
import Lookup from './Lookup/Lookup'
import Mypage from './Mypage/Mypage';
import Mobile from './Mobile/Mobile';
import Notfound from './Notfound/Notfound'

const cx = classNames.bind(styles)

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pathname: '/'
    }
    axios.defaults.baseURL = 'http://ec2-3-132-214-132.us-east-2.compute.amazonaws.com/api';
    axios.defaults.timeout = 10000;
    axios.defaults.headers.common['Accept'] = '*/*';
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        pathname: window.location.pathname
      })
    }, 1);
  }

  render(){
    const { pathname } = this.state;
    return (
      <div className={cx('App')}>
        {
          isMobile ? <Mobile/> : 
            <React.Fragment>
              <Header pathname={pathname} />
              <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/reservation' exact component={Reservation}/>
                <Route path='/inquiry' exact component={Inquiry}/>
                <Route path='/lookup' exact component={Lookup}/>
                <Route path='/mypage' exact component={Mypage}/>
                <Route component={Notfound}/>
              </Switch>
              <Footer />
            </React.Fragment>
          }
      </div>
    )
  }
}

export default App;
