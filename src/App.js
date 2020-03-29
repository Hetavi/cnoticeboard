import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar1 from './components/layout/Navbar'
import DashboardOld from './components/dashboard/DashboardOld'
import Dashboard from './components/dashboard/Dashboard'
import Dashboard_dr from './components/dashboard/Dashboard_dr'
import NoticeDetails from './components/projects/NoticeDetails'
import edit_media from './components/projects/MediaDetails'
import CreateNotice from './components/projects/CreateNotice'
import SignIn from './components/auth/SignIn'

import SignUp from './components/auth/SignUp'
import CreatingHosp from './components/projects/CreateHosp'
import Dashboard_hosp from './components/dashboard/Dashboard_hosp'
import edit_hosp from './components/projects/HospDetails'
import CreatingDr from './components/projects/CreateVisitngDr'
import CreatingMedia from './components/projects/CreateMedia'

import edit_dr from './components/projects/DrDetails'
import Admin from './components/layout/Navbar2'
class App extends Component {
  render() {
  
    return ( 
      <BrowserRouter>
        <div className="App">
          <Navbar1 />         
         
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/dash_dr' component={Dashboard_dr} />
            <Route exact path='/dash_hosp' component={Dashboard_hosp} />
            <Route path='/edit/:id' component={NoticeDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateNotice} />
            <Route path='/hosp' component={CreatingHosp} />
            <Route path='/media' component={CreatingMedia} />
            <Route path='/edit_hosp/:id' component={edit_hosp} />
            <Route path='/edit_media/:id' component={edit_media} />
            <Route path='/dr' component={CreatingDr} />
            <Route path='/edit_dr/:id' component={edit_dr} />
            <Route path='/admin' component={Admin} />
            <Route exact path='/old' component={DashboardOld} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
