import React, {useState} from 'react';
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationPopOver from './NotificationPopOver';
import { SignalCellularNull } from '@mui/icons-material';

const Notification = (props:NotificationProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const {notifications} = props;
    const notificationCount = notifications && notifications.length || 0;

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleOpen = (event:React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }

    return (
        <Badge badgeContent={notificationCount} color="error" invisible={notificationCount == 0}>
            <div onClick={handleOpen}>
                <NotificationsNoneIcon/>
            </div>
            <NotificationPopOver anchorEl={anchorEl} onClose={handleClose} notifications={notifications} open={anchorEl !== null}/>
        </Badge>
    );
};

interface NotificationProps {
    notifications: notification[] | null;
}

export default Notification;