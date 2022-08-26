import React from 'react';
import useLogtime from '../../../hooks/useLogtime';
import {getMondayOfLastWeek, addDaysToDate} from "./utils";
//data api in `/v2/users/:id/locations_stats`

import styles from './LogTime.module.css';

const LogTime = (props:LogTimeProps) => {
    const {lastWeekLogTime} = props;
    const logtime = useLogtime(1);
    const previousMonday = getMondayOfLastWeek();
    const previousSunday = addDaysToDate(previousMonday, 6);
    const lastWeekLogtime = logtime.getPeriodLogtime(previousMonday, previousSunday, 'hours');

    const genIncreaseArea = (weeklyDifference:number) => {

    }
    
    return (
        <div className={`card`}>
            <span className={styles.subTitle}>Logtime</span>
            <div className={styles.title}>{lastWeekLogtime} la derniere semaine</div>
        </div>
    );
};

interface LogTimeProps {
    lastMonthLogTime: UserLogTime;
    weeklyDifference: number;
};

export default LogTime;