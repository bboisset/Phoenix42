type stringDate = string;
type minutesCount = number;

type hourDisplayFormat = 'minutes' | 'hours';

interface DayLogTime {
    day: stringDate;
    minutesInSchool: minutesCount;
}

type UserLogTime = DayLogTime[];

interface User42LogTime {
    [key: string]: string;
}