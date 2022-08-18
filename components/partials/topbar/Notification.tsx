import React from 'react';
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


const Notification = (props:NotificationProps) => {
    const {notifications} = props;
    const notificationCount = notifications && notifications.length || 0;

    return (
        <Badge badgeContent={notificationCount} color="error" invisible={notificationCount == 0}>
            <NotificationsNoneIcon />
        </Badge>
    );
};

interface NotificationProps {
    notifications: notification[] | null;
}

export default Notification;