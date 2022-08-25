type notificationLevel = 'info' | 'warning' | 'error' | 'success';

interface notification {
    id?: number;
    level: notificationLevel;
    message: string;
    read?: boolean;
}

interface notificationState {
    data: notification[];
    unreadCount: number;
    isLoading: boolean;
    error: string;
}