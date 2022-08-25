import React from 'react';

//data api in `/v2/users/:id/locations_stats`

import styles from './LogTime.module.css';

const LogTime = (props:LogTimeProps) => {
    const {lastWeekLogTime} = props;

    const genIncreaseArea = (weeklyDifference:number) => {

    }
    
    return (
        <div className={`card`}>
            <span className={styles.subTitle}>Logtime</span>
            <div className={styles.title}>{lastWeekLogTime}h la derniere semaine</div>
        </div>
    );
};

interface LogTimeProps {
    lastMonthLogTime: UserLogTime;
    weeklyDifference: number;
};

export default LogTime;