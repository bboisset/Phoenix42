import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './menu.module.css';

const MenuRow = (props:MenuRowProps) => {
    const {icon, name, value} = props;
    const url = value || "";

    return (
        <li style={{display:"block"}}>
            <Link href={url}>
               <a className={styles.row}>
                    <Image src={icon} width={20} height={20} layout="fixed" />
                    <span className={styles.name}>{name}</span>
               </a>
            </Link>
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
    value?: string;
}

export default MenuRow;