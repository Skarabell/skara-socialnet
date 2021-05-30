import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {Box, Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export type MapPropsType = {
    isAuth: boolean
    login: string | null
}
export type DispatchPropsType = {
    logout: () => void
}

const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    const classes = useStyles();
    return <header className={s.header}>
        <img src="https://source.unsplash.com/random"/>
        <div className={s.loginBlock}>
            {props.isAuth ?
                    <Button onClick={props.logout} variant="contained" color="primary"> {props.login} Log out</Button>
                : <NavLink to={"/login"}>Login</NavLink>}
        </div>

<Box className={s.menuBlock} >
            <NavLink to="/profile" activeClassName={s.activeLink}>
                <Button variant="contained" color="primary">
                    Profile
                </Button></NavLink>

            <NavLink to="/dialogs" activeClassName={s.activeLink}>
                <Button variant="contained" color="primary">
                    Messages
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