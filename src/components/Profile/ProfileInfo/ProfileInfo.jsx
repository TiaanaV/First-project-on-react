import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user-icon.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileInfoData from "./ProfileInfoData";
import ProfileInfoDataForm from "./ProfileInfoDataForm";

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const onAvatarPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img
          className={classes.avatar}
          src={props.profile.photos.large || userPhoto}
        />
        {props.isOwner && (
          <form>
            <input type={"file"} onChange={onAvatarPhotoSelected} />
          </form>
        )}
        {editMode ? (
          <ProfileInfoDataForm profile={props.profile} />
        ) : (
          <ProfileInfoData
            goToEditMode={() => {
              setEditMode(true);
            }}
            profile={props.profile}
            isOwner={props.isOwner}
          />
        )}

        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
