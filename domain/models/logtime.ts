type stringDate = string;
type minutesCount = number;

interface UserLogTime {
    /**
     * Key represent the day of the week `YYYY-MM-DD`
     * the value is the total amount of user log time
     */
    [key: stringDate]: minutesCount;
}

interface User42LogTime {
    [key: string]: string;
}