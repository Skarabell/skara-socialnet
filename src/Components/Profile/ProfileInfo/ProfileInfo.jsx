import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus.jsx"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return ( <div>
        {
            /*<div className={s.descriptionBlock}>
                <img
                    src="https://static5.depositphotos.com/1003371/521/i/600/depositphotos_5214674-stock-photo-tropical-sea-sunset.jpg"/>
               */}
        <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large}/>
                    <ProfileStatus status={props.status}
                                   updateStatus={props.updateStatus}/>
                </div>
            </div>
            )
        }
    export default ProfileInfo;