import React, {useState, useEffect} from 'react';
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationPopOver from './NotificationPopOver';
import { SignalCellularNull } from '@mui/icons-material';
import useNotification from '../../../hooks/useNotification';

import styles from './notification.module.css';

const Notification = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [hasBeenOpened, setHasBeenOpened] = useState<boolean>(false);
    const notifications = useNotification(1);
    const notificationCount = hasBeenOpened ? 0 : notifications.unreadCount;

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleOpen = (event:React.MouseEvent<HTMLElement>) => {
        setHasBeenOpened(true);
        setAnchorEl(event.currentTarget);
    }

    return (
        <Badge badgeContent={notificationCount} color="error" invisible={notificationCount == 0}>
            <div onClick={handleOpen} className={styles.icon}>
                <NotificationsNoneIcon/>
            </div>
            <NotificationPopOver anchorEl={anchorEl} onClose={handleClose} notifications={notifications} open={anchorEl !== null}/>
        </Badge>
    );
};

export default Notification;