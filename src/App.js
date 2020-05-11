import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar1 from './components/layout/Navbar'
import MediaDash from './components/dashboard/MediaDash'
import Dashboard from './components/dashboard/Dashboard'
import Dashboard_dr from './components/dashboard/Dashboard_dr'
import Dashboard_user from './components/dashboard/userDash_main'
import Dashboard_user_list from './components/dashboard/userDash_CreateList'
import Dashboard_user_back from './components/dashboard/userDash'
import Edit_user from './components/projects/UserDetails'
import NoticeDetails from './components/projects/NoticeDetails'
import edit_media from './components/projects/CreateMedia'
import CreateNotice from './components/projects/CreateNotice'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreatingHosp from './components/projects/CreateHosp'
import Dashboard_hosp from './components/dashboard/Dashboard_hosp'
import edit_hosp from './components/projects/HospDetails'
import CreatingDr from './components/projects/CreateVisitngDr'
import CreatingMedia from './components/projects/CreateMedia'
import ListBoard from './components/dashboard/ListBoard'
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
            <Route exact path='/lists' component={ListBoard} />
            <Route exact path='/dash_dr' component={Dashboard_dr} />
            <Route exact path='/dash_hosp' component={Dashboard_hosp} />
              {/*for Updating  List= /dash_user*/}
            <Route path='/createlist' component={Dashboard_user_list}/>
            <Route path='/dash_user' component={Dashboard_user}/>
            <Route path='/edit_user/:id' component={Edit_user}/>
            <Route path='/Dashboard_user_back' component={Dashboard_user_back}/>
            <Route path='/edit/:id' component={CreateNotice} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateNotice} />
            <Route path='/hosp' component={CreatingHosp} />
            <Route path='/media' component={CreatingMedia} />
            <Route path='/edit_hosp/:id' component={edit_hosp} />
            <Route path='/edit_media/:id' component={edit_media} />
            <Route path='/dr' component={CreatingDr} />
            <Route path='/edit_dr/:id' component={edit_dr} />
            <Route path='/adminboard' component={Admin} />
            <Route path='/userboard' component={Admin} />
            <Route exact path='/old' component={MediaDash} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
