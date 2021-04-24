import React, {Component} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Route} from "react-router-dom";
import UsersConteiner from "./Components/Users/UsersConteiner";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/Preloader/Preloader";
import {connect} from "react-redux";
import {logout} from "./redux/auth-reducer";
import {compose} from "redux";
import {withSuspense} from "./Components/Hoc/withSuspense";

const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));
const DialogsConteiner = React.lazy(() => import('./Components/Dialogs/DialogsConteiner'));

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
                           render={withSuspense(DialogsConteiner)}/>
                    <Route path='/profile/:userId?'
                           render={withSuspense(ProfileContainer)}/>
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