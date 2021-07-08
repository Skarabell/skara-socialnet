import React, {useEffect} from "react";
import Paginator from "../../utils/Paginator";
import User from "./User";
import {FilterType, requestUsers} from "../../redux/users-reducer";
import {UsersSearchForm} from "./UsersSearchForm";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "../../redux/users-selectors";
import { useHistory } from "react-router-dom";
import * as queryString from "querystring";


type PropsType = {}

export const Users: React.FC<PropsType> = (props) => {

    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingProgress)

    const history = useHistory()
    const dispatch = useDispatch()

    const parsed: {
        term?: string
        friend?: "true" | "false" | "null"
        page?: string
    } = queryString.parse(history.location.search)

    const actualFilter = {...filter}
    let actualPage = currentPage

    if (parsed.term) {
        actualFilter.term = parsed.term
    }
    if (parsed.friend) {
        actualFilter.friend = parsed.friend === "true" ?
            true: parsed.friend === "false" ? false: null
    }
    if (parsed.page && parsed.page !== "1") {
        actualPage = +parsed.page
    }

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, actualFilter))
    },[])

    const onPageChanged = (pageNumber: number) => {
        history.push({
            pathname: "/users",
            search: `?term=${filter.term}&friend=${filter.friend}&
            page=${pageNumber}`
        })
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        history.push({
            pathname: '/users',
            search: `?term=${filter.term}&friend=${filter.friend}&page=${actualPage}`
        })
        dispatch(requestUsers(1, pageSize, filter))
    }
    const follow = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }

    return <div>
        <UsersSearchForm onFilterChanged={onFilterChanged}
                         initialValue={actualFilter}/>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        <div>
            {
                users.map(u => <User user={u}
                                     followingInProgress={followingInProgress}
                                     key={u.id}
                                     unfollow={unfollow}
                                     follow={follow}/>
                )
            }
        </div>
    </div>
}
export default Users;
