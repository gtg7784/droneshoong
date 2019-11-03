import React from 'react';
import { Switch, Route } from 'react-router-dom'
import * as classNames from 'classnames/bind'

import styles from './App.scss';

import Header from '../components/Header/Header'

import Main from './Main/Main';
import Footer from '../components/Footer/Footer';

const cx = classNames.bind(styles)

class App extends React.Component {
  render(){
    return (
      <div className={cx('App')}>
        <Header/>
        <Switch>
          <Route path='/' exact component={Main}/>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
