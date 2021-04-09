import React from "react";
import "./App.css";
import Nav from "./Components/Navbar/Navbar.jsx";
import ProfileContainer from "./Components/Profile/ProfileContainer.jsx";
import {Route, withRouter} from "react-router-dom";
import DialogsConteiner from "./Components/Dialogs/DialogsConteiner";
import UsersConteiner from "./Components/Users/UsersConteiner";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {logout} from "./redux/auth-reducer";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <DialogsConteiner/>}/>
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer/>}/>
                    <Route path="/users"
                           render={() => <UsersConteiner/>}/>
                    <Route path="/login"
                           render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose (withRouter,
    connect(mapStateToProps, {initializeApp,
    logout})) (App);
