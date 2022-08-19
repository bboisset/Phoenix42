import React from 'react';
import Popover from '@mui/material/Popover';
import { on } from 'events';

const NotificationPopOver = (props:NotificationPopOverProps) => {
    const {anchorEl, notifications, onClose} = props;

    return (
        <Popover id="notification-popover"
            open={false}
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
            <h2>test</h2>
        </Popover>
    );
};

interface NotificationPopOverProps {
    anchorEl: HTMLElement | null;
    notifications: notification[] | null;
    open: boolean;
    onClose: Function;
}

export default NotificationPopOver;