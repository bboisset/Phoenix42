import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Tooltip from '@mui/material/Tooltip';

import styles from './menu.module.css';

const MenuRow = (props: MenuRowProps) => {
    const { icon, name, value, active } = props;
    const url = value || "";

    return (
        <li style={{ display: "block" }}>
            <Tooltip title={name} placement="right">
                <div>
                    <Link href={url}>
                        <a className={`${styles.row} ${active ? styles.active : ""}`}>
                            <Image src={icon} width={20} height={20} layout="fixed" />
                            <span className={styles.name}>{name}</span>
                        </a>
                    </Link>
                </div>
            </Tooltip>
        </li>
    );
};

interface MenuRowProps {
    /**
     * The icon to display in the menu row
     */
    icon: string;
    /**
     * The text to display in the menu row
     */
    name: string;
    /**
     * Destination of the link
     */
    value: string;
    active: boolean;
}

export default MenuRow;