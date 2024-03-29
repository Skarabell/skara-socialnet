import React from "react"
import {actions} from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs"
import {connect} from "react-redux"
import {withAuthRedirect} from "../Hoc/withAuthComponent"
import {compose} from "redux"
import {AppStateType} from "../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => ({
    dialogsPage: state.dialogsPage,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {...actions}),
    withAuthRedirect
)(Dialogs);