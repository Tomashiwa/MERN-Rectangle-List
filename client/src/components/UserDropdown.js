import React, { useState, useContext, useRef } from 'react'
import { useHistory } from 'react-router-dom';

import ButtonDropdown from "reactstrap/lib/ButtonDropdown";
import DropdownToggle from "reactstrap/lib/DropdownToggle";
import DropdownMenu from "reactstrap/lib/DropdownMenu";
import DropdownItem from "reactstrap/lib/DropdownItem";

import UserContext from '../context/UserContext';
import userIcon from "../icons/icon-user.svg";
import "./css/UserDropdown.css"

function UserDropdown() {
    const {userData, setUserData} = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);

    const history = useHistory();

    const iconSizeRef = useRef(24);
    
    const toggle = () => setIsOpen(!isOpen);

    const logout = () => {
        setUserData({...userData, ...{token: undefined, user: undefined}});
        localStorage.setItem("auth-token", "");
        history.push("/");
    }

    const viewProfile = () => {
        history.push(`/profile/${userData.user.id}`);
    }

    const viewBookmarked = () => {
        history.push(`/MyBookmark/${userData.user.id}`);
    }

    const viewUpload = () => {
        history.push(`/MyUpload/${userData.user.id}`);
    }

    return (
        <ButtonDropdown isOpen={isOpen} toggle={toggle} id="userdropdown">
            <DropdownToggle caret color="warning">
                <img
                    id="userdropdown-icon"
                    src={userIcon} 
                    width={`${iconSizeRef.current}px`}
                    height={`${iconSizeRef.current}px`}
                    alt="" />
                {userData.user.name}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={viewProfile}>My profile</DropdownItem>
                <DropdownItem onClick ={viewUpload}>My uploads</DropdownItem>
                <DropdownItem onClick={viewBookmarked}>My bookmarks</DropdownItem>
                <DropdownItem divider/>
                <DropdownItem onClick={logout}>Log out</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    )
}

export default UserDropdown
