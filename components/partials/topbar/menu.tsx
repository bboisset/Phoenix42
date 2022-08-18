import React from 'react';
import Notification from './Notification';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import styles from './menu.module.css';

const defaultNotification:notification[] = [
    {
        id: 1,
        title: 'Nouvelle notification',
        message: 'Vous avez un nouveau message',
    },
    {
        id: 2,
        title: 'Nouvelle notification',
        message: 'Vous avez un nouveau message',
    }
]

const Menu = (props:MenuProps) => {

    const genUserMenu = (user:User) => {
        return (
            <div className={styles.userMenu}>
                <Avatar alt={user.login} src={user.image_url} />
                <span className={styles.userName}>{user.login}</span>
                <KeyboardArrowDownIcon />
            </div>
        );
    }

    return (
        <>
            <Notification notifications={defaultNotification} />
            {genUserMenu(props.user)}
        </>
    );
};

interface MenuProps {
    user: User;
}

export default Menu;