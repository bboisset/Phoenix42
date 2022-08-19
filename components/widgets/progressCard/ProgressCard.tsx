import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import {rules} from "../ruleTable/rules"
import CircularProgress from '@mui/material/CircularProgress';

import styles from "./ProgressCard.module.css";

const keyToColor = {
    low: "--danger",
    medium: "--yellow",
    high: "--success",
}

const ProgressCard = (props:ProgressCardProps) => {
    const { percentage, title, value, imageSrc, subTitle, color } = props;
    let newPercentage = percentage * 0.782;
    newPercentage = newPercentage < 5 ? 5 : newPercentage;
    

    const genProgress = () => {
        return (
            <div className={styles.progress}>
                <CircularProgress value={newPercentage} variant="determinate" className='progressCircle' thickness={2} style={{color:color}}/>
            </div>
        );
    }
    
    return (
        <div className={`${styles.ProgressCard} card`}>
            {genProgress()}
            <span>{title}</span>
            <span className={styles.value}>{value}</span>
            <Image src={imageSrc} width={30} height={30} layout="fixed" />
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
    color: string;
}

export default ProgressCard;