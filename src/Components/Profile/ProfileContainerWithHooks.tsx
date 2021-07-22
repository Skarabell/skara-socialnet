import React, {useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {
    getUserProfile,
    updateStatus,
    savePhoto,
    saveProfile,
    getStatus
} from "../../redux/profile-reducer"
import {RouteComponentProps, useHistory} from "react-router-dom";
import {ProfileType} from "../../Types/Types";
import {
    getAuthorizedUserId,
    getProfile,
    getStatusSelector
} from "../../redux/profile-selectors";



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

type PropsTypeFC = {}

const ProfilePage: React.FC<PropsTypeFC & PathParamsType> = ({...props}) => {

    const profile = useSelector(getProfile)
    const status = useSelector(getStatusSelector)
    const authorizedUserId = useSelector(getAuthorizedUserId)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        dispatch(getUserProfile), dispatch(getStatus),
            dispatch(updateStatus), dispatch(savePhoto), dispatch(saveProfile)
    }, [dispatch])

    let userId: number | null = +props.match.params.userId;
    if (!userId) {
        userId = authorizedUserId
        if (!userId) {
            history.push("/login");
        }

        if (!userId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')");
        } else {
            dispatch(getUserProfile(userId))

            dispatch(getStatus(userId))
        }
    }

    return (
        <Profile {...props}
                 profile={profile}
                 isOwner={!props.match.params.userId}
                 status={status}
                 savePhoto={savePhoto}
                 saveProfile={saveProfile}
                 updateStatus={updateStatus}/>
    )
}
export default ProfilePage