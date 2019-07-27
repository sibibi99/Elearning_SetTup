import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './common/components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import CourseList from './pages/CourseList/CourseList';
import CourseDetails from './pages/CourseDetails/CourseDetails';
import HomeTemplate from './templates/HomeTemplate';
import Demo from './common/components/Demo';
import Login from './pages/Login/Login';


function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <HomeTemplate  path='/home'  Component={HomePage}></HomeTemplate>
          <HomeTemplate  path='/courselist'  Component={CourseList}></HomeTemplate>
          <HomeTemplate  path='/coursedetails/:courseid'  Component={CourseDetails}></HomeTemplate>
          <HomeTemplate  path='/login'  Component={Login}></HomeTemplate>
          <HomeTemplate  path='/'  Component={HomePage}></HomeTemplate>
          
        </Switch>
      </Fragment>
    </BrowserRouter>


  );
}

export default App;
