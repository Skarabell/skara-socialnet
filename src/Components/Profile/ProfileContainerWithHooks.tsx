import React, {useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {getUserProfile, updateStatus, savePhoto, saveProfile} from "../../redux/profile-reducer"
import {RouteComponentProps, useHistory} from "react-router-dom";
import {ProfileType} from "../../Types/Types";
import {getAuthorizedUserId, getProfile, getStatus} from "../../redux/profile-selectors";
import {getIsAuth} from "../../redux/users-selectors";


type DispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}
type PathParamsType = {
    userId: string
}
type PropsType = DispatchPropsType & RouteComponentProps<PathParamsType>

export const ProfilePage: React.FC<PropsType> = (props) => {

    const profile = useSelector(getProfile)
    const status = useSelector(getStatus)
    const isAuth = useSelector(getIsAuth)
    const authorizedUserId = useSelector(getAuthorizedUserId)


    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        //@ts-ignore
        dispatch(refreshProfile(getUserProfile, getStatus,
            updateStatus, savePhoto, saveProfile))
    }, [])

    const refreshProfile = () => {
        let userId: number | null = +props.match.params.userId;
        if (!userId) {
            userId = authorizedUserId
            if (!userId) {
                history.push("/login");
            }
        }
        if (!userId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')");
        } else {
            dispatch(getUserProfile(userId))
            //@ts-ignore
            dispatch(getStatus(userId))
        }
    }

    return (
        <Profile {...props}
                 profile={profile}
                 isOwner={!props.match.params.userId}
                 status={status}
                 savePhoto={props.savePhoto}
                 saveProfile={props.saveProfile}
                 updateStatus={props.updateStatus}/>
    )
}