import React, {Component} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Route, withRouter} from "react-router-dom";
import DialogsConteiner from "./Components/Dialogs/DialogsConteiner";
import UsersConteiner from "./Components/Users/UsersConteiner";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/Preloader/Preloader";
import {connect} from "react-redux";
import {logout} from "./redux/auth-reducer";
import {compose} from "redux";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsConteiner/>}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersConteiner/>}/>
                    <Route path='/login'
                           render={() => <LoginPage/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {
        initializeApp,
        logout
    }))(App);