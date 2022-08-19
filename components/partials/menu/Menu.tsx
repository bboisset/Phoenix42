import React from 'react';
import MenuRow from './MenuRow';

import styles from './menu.module.css';
import {menuConfig} from "../../menuConfig";

const Menu = () => {
    
    return (
        <ul className={styles.menu}>
            {menuConfig.map((menuItem, index) => {
                if (menuItem?.type === 'separator') return (<hr className={styles.separator}/>);
                const url = menuItem?.value || "/";
                console.log(url);
                return (<MenuRow key={index} icon={menuItem.icon} name={menuItem.name} value={menuItem.value} />);
            })}
        </ul>
    );
};

export default Menu;