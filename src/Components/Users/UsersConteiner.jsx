import React from "react";
import {connect} from "react-redux";
import Users from "./Users"
import Preloader from "../Preloader/Preloader";
import {
    follow, unfollow, setCurrentPage,
    toggleFollowingProgress, requestUsers
} from "../../redux/users-reducer";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getFollowingProgress,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers (this.props.currentPage, this.props.pageSize)
                      }

    onPageChanged = (pageNumber) => {
        this.props.getUsers (pageNumber, this.props.pageSize)
            }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isFetching={this.props.isFetching}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        toggleFollowingProgress: getFollowingProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
        toggleFollowingProgress, getUsers: requestUsers
    }))(UsersContainer)