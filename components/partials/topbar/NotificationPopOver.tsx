import React from 'react';
import Popover from '@mui/material/Popover';
import NotificationItem from './NotificationItem';

import styles from "./notification.module.css";

const NotificationPopOver = (props:NotificationPopOverProps) => {
    const {anchorEl, notifications, onClose, open} = props;

    const genPendingNotifications = () => {
        //to do
    }

    const genErrorNotifications = () => {
        return (
            <div>
                <span>Une erreur est survenue</span>
            </div>
        );
    }

    const genNotifications = () => {
        if (notifications.isLoading) {
            return (genPendingNotifications());
        } else if (notifications.error) {
            return (genErrorNotifications());
        } else if (notifications.data.length > 0) {
           return (
                <div className={styles.notificationPopOver__content}>
                    {notifications.data.map((notification, index) => {
                        return (
                            <NotificationItem key={index} notification={notification}/>
                        );
                    })}
                </div>
           )
        }
    }

    return (
        <Popover 
            id="notification-popover"
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            onClose={onClose}
        >
            <span className={styles.title}>Notifications</span>
            <hr style={{color:"#D9D9D9",borderStyle:'solid',width:'70%'}}/>
            {genNotifications()}
        </Popover>
    );
};

interface NotificationPopOverProps {
    anchorEl: HTMLElement | null;
    notifications: notificationState;
    open: boolean;
    onClose: Function;
}

export default NotificationPopOver;