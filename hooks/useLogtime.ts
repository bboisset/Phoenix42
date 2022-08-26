import React, {useEffect, useState} from 'react';

function useLogtime(user_id:number){
    const [logtime, setLogtime] = useState<UserLogTime>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:3000/api/user/logtime/${user_id}`)
            .then(res => res.json())
            .then(data => {
                setLogtime(data);
                setIsLoading(false);
            }).catch(error => {
                setError(error);
                setIsLoading(false);
            }
        );
    }, []);

    const getLastDaysLogtime = (days:number, format:hourDisplayFormat = 'minutes'):string => {
        if (error) return 'Error';
        if (isLoading) return 'Loading...';
        const today = new Date();
        const lastDays = new Date(today.setDate(today.getDate() - days));
        const lastDaysLogtime = logtime.filter((logtime) => {
            const logtimeDate = new Date(logtime.day);
            return logtimeDate.getTime() >= lastDays.getTime();
        }).map((logtime) => logtime.minutesInSchool);
        const totalMinutes = lastDaysLogtime.reduce((a, b) => a + b, 0);
        if (format === 'hours') {
            return (`${Math.floor(totalMinutes / 60)}h${totalMinutes % 60}`);
        }
        return (totalMinutes.toString());
    }

    const getPeriodLogtime = (start:string|Date, end:string|Date, format:hourDisplayFormat = 'minutes'):string => {
        const periodLogtime = getData(start, end)?.map((logtime) => logtime.minutesInSchool);
        const totalMinutes = periodLogtime.reduce((a, b) => a + b, 0);
        if (format === 'hours') {
            return (`${Math.floor(totalMinutes / 60)}h${totalMinutes % 60}`);
        }
        return (totalMinutes.toString());
    }

    const getData = (start:string|Date, end:string|Date):UserLogTime|null => {
        if (error || isLoading) return null;
        if (typeof start === 'string') start = new Date(start);
        if (typeof end === 'string') end = new Date(end);
        start.setHours(0,0,0,0);
        end.setHours(0,0,0,0);
        const periodLogtime = logtime.filter((logtime) => {
            const logtimeDate = new Date(logtime.day);
            console.log(`${logtimeDate.getTime()} >= ${start.getTime()} && ${logtimeDate.getTime()} <= ${end.getTime()}`);
            return logtimeDate.getTime() >= start.getTime() && logtimeDate.getTime() <= end.getTime();
        });
        return (periodLogtime);
    }
    
    return ({
        data: logtime,
        isLoading,
        error,
        getLastDaysLogtime,
        getPeriodLogtime
    });
}
export default useLogtime;