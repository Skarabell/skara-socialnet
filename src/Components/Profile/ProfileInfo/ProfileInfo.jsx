import React from "react";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../man-300x300.png "
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (

        <div className={s.descriptionBlock}>
            {/*
                <img
                    src="https://static5.depositphotos.com/1003371/521/i/600/depositphotos_5214674-stock-photo-tropical-sea-sunset.jpg"/>
*/}
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto}/>
                <ProfileStatusWithHooks status={status}
                                        updateStatus={updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo;