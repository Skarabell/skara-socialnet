import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import { Button } from "react-bootstrap";

const Header = (props) => {
    return   <header className={s.header}>
        <img src="https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg"/>
    <div className={s.loginBlock}>
        {props.isAuth ? <div>{props.login} -
                <Button onClick={props.logout} variant="primary">Log out</Button>
        </div>
        : <NavLink to={"/login"}>Login</NavLink> }
    </div>
    </header>
}
export default Header;