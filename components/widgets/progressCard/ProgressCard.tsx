import React, {useState} from 'react';
import Image from 'next/image';
import CircularProgress from '@mui/material/CircularProgress';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Popover from '@mui/material/Popover';

import styles from "./ProgressCard.module.css";

const keyToColor = {
    low: "--danger",
    medium: "--yellow",
    high: "--success",
}

const ProgressCard = (props:ProgressCardProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
    const { percentage, title, value, imageSrc, subTitle, color } = props;
    const hasOptions = props?.hasOptions ?? false;
    let newPercentage = percentage * 0.782;
    newPercentage = newPercentage < 5 ? 5 : newPercentage;
    

    const genProgress = () => {
        return (
            <div className={styles.progress}>
                <CircularProgress value={newPercentage} variant="determinate" className='progressCircle' thickness={2} style={{color:color}}/>
            </div>
        );
    }

    const handleOption = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const genOptions = () => {
        if (!hasOptions) return ;
        return (
            <div className={styles.options} onClick={handleOption}>
                <MoreHorizIcon className={styles.moreIcon}/>
            </div>
        );
    }
    
    return (
        <div className={`${styles.ProgressCard} card`}>
            {genProgress()}
            <span>{title}</span>
            <span className={styles.value}>{value}</span>
            <Image src={imageSrc} width={30} height={30} layout="fixed" quality={100} />
            <span className={styles.subTitle}>{subTitle}</span>
            {genOptions()}
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
    hasOptions?: boolean;
}

export default ProgressCard;