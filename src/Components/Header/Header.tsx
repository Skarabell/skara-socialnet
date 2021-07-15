import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {Box, Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth, getLogin} from "../../redux/users-selectors";
import {logout} from "../../redux/auth-reducer";

export type MapPropsType = {}

const Header: React.FC<MapPropsType> = (props) => {

    const isAuth = useSelector(getIsAuth)
    const login = useSelector(getLogin)

    const dispatch = useDispatch()

    const logoutCallback = () => {
        dispatch(logout())
    }

    return <header className={s.header}>
        <NavLink to="/" activeClassName={s.activeLink}>
            <img src="https://source.unsplash.com/random"/>
        </NavLink>
        <div className={s.loginBlock}>
            {isAuth ?
                <Button onClick={logoutCallback} variant="contained" color="primary">
                    {login} Log out
                </Button>
                : <NavLink to={"/login"}>Login</NavLink>}
        </div>

        <Box className={s.menuBlock}>
            <NavLink to="/profile" activeClassName={s.activeLink}>
                <Button variant="contained" color="primary">
                    Profile
                </Button></NavLink>

            <NavLink to="/dialogs" activeClassName={s.activeLink}>
                <Button variant="contained" color="primary">
                    Messages
                </Button></NavLink>

            <NavLink to="/chat" activeClassName={s.activeLink}>
                <Button variant="contained" color="primary">
                    Chat
                </Button></NavLink>

            <NavLink to="/users" activeClassName="#contained-buttons">
                <Button variant="contained" color="primary">
                    Friends
                </Button></NavLink>

            <NavLink to="/news" activeClassName={s.activeLink}>
                <Button variant="contained" color="primary">
                    News
                </Button></NavLink>

            <NavLink to="/music" activeClassName={s.activeLink}>
                <Button variant="contained" color="primary">
                    Music
                </Button></NavLink>
        </Box>

    </header>
}
export default Header;