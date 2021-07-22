import React, {Component} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {UsersPage} from "./Components/Users/UsersConteiner";
import Header from "./Components/Header/Header";
import {LoginPage} from "./Components/Login/LoginPage";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/Preloader/Preloader";
import {withSuspense} from "./Components/Hoc/withSuspense";
import Music from "./Components/Music/Music";
import {PlayerYoutube} from "./pages/YouTube/YouTube";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import store, {AppStateType} from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsConteiner'));
//@ts-ignore
const ProfilePage = React.lazy(() => import('./Components/Profile/ProfileContainerWithHooks'));
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

const SuspendedDialogs = withSuspense(DialogsContainer);
const SuspendedProfile = withSuspense(ProfilePage);
const SuspendedChat = withSuspense(ChatPage);

class App extends Component<MapPropsType & DispatchPropsType> {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert("Some error")
    }

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <SuspendedDialogs />}/>
                    <Route path='/profile/:userId?'
                           render={() => <SuspendedProfile />}/>
                    <Route path='/chat'
                           render={() => <SuspendedChat />}/>
                    <Route path='/music'
                           render={() => <Music /> }/>
                    <Route path='/users'
                           render={() => <UsersPage pageTitle={"Skara"}/>}/>
                    <Route path='/login'
                           render={() => <LoginPage/>}/>
                    <Route path='/youtube'
                           render={() => <PlayerYoutube/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SkaraJSApp: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SkaraJSApp;