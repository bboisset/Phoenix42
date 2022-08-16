import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import CircularProgress from '@mui/material/CircularProgress';

import styles from "./ProgressCard.module.css";

const ProgressCard = (props:ProgressCardProps) => {
    const { percentage, title, value, imageSrc, subTitle } = props;

    const genProgress = () => {
        return (
            <div className={styles.progress}>
                <CircularProgress value={40} variant="determinate" className='progressCircle' thickness={2} style={{color:"#258F00"}}/>
            </div>
        );
    }
    
    return (
        <div className={`${styles.ProgressCard} card`}>
            {genProgress()}
            <span>{title}</span>
            <span className={styles.value}>{value}</span>
            <Image src={imageSrc} width={35} height={35} layout="fixed" />
            <span className={styles.subTitle}>{subTitle}</span>
        </div>
    );
};

interface ProgressCardProps {
    percentage: number;
    title: string;
    value: string;
    imageSrc: string;
    subTitle: string;
}

export default ProgressCard;