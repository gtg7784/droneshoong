import React from 'react';
import { Switch, Route } from 'react-router-dom'
import * as classNames from 'classnames/bind'

import styles from './App.scss';

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';

import Main from './Main/Main';
import About from './About/About';
import Reservation from './Reservation/Reservation';
import Inquiry from './Inquiry/Inquiry';
import Mypage from './Mypage/Mypage';
import Illsut from '../components/Illust/Illust';

const cx = classNames.bind(styles)

class App extends React.Component {
  render(){
    return (
      <div className={cx('App')}>
        <Header/>
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/about' exact component={About}/>
          <Route path='/reservation' exact component={Reservation}/>
          <Route path='/inquiry' exact component={Inquiry}/>
          <Route path='/mypage' exact component={Mypage}/>
        </Switch>
        <Footer />
        {window.location.pathname === '/' ? <Illsut/> : null}
      </div>
    )
  }
}

export default App;
