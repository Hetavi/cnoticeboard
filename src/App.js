import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar1 from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Dashboard1 from './components/dashboard/Dashboard1'
import NoticeDetails from './components/projects/NoticeDetails'
import CreateNotice from './components/projects/CreateNotice'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreatingHosp from './components/projects/CreateHosp'
import Dashboard_hosp from './components/dashboard/Dashboard_hosp'
import edit_hosp from './components/projects/HospDetails'
import CreatingDr from './components/projects/CreateVisitngDr'
class App extends Component {
  render() {
    return ( 
      <BrowserRouter>
        <div className="App">
          <Navbar1 />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/old' component={Dashboard1} />
            <Route exact path='/dash_hosp' component={Dashboard_hosp} />
            <Route path='/edit/:id' component={NoticeDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateNotice} />
            <Route path='/hosp' component={CreatingHosp} />
            <Route path='/edit_hosp/:id' component={edit_hosp} />
            <Route path='/dr' component={CreatingDr} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
