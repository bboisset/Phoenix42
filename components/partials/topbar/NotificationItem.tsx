import React from 'react';
import Image from "next/image";

import styles from "./notification.module.css";

const NotificationLevelToIcon = {
    info: "/icons/info.png",
    warning: "/icons/warning.png",
    error: "/icons/error.png",
    success: "/icons/success.png",
};

const NotificationItem = (props:NotificationItemProps) => {
    const {level, message} = props.notification;

    return (
        <div className={styles.notificationItem}>
            <div className={styles.notificationItem__icon}>
                <Image 
                    src={NotificationLevelToIcon[level]}
                    alt="notification" 
                    width={40} 
                    height={40}
                    layout="fixed"
                />
            </div>
            <div className={styles.notificationItem__content}>
                <span>{message}</span>
            </div>
        </div>
    );
};

interface NotificationItemProps {
    notification: notification;
}

export default NotificationItem;