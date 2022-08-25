import React, {useState, useEffect} from 'react';

function useNotification(user_id: number) {
    const [notification, setNotification] = useState<notification[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch(`/api/user/notification/${user_id}`)
            .then((response) => response.json())
            .then((data) => {
                setNotification(data);
                setIsLoading(false);
            });
    }, []);

    return {
        data: notification,
        unreadCount: notification != null ? notification.filter((n) => !n.read).length : 0,
        isLoading, error
    };
}

export default useNotification;