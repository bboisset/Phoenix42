import React, { useState } from 'react';
import MenuRow from './MenuRow';

import styles from './menu.module.css';
import { menuConfig } from "../../menuConfig";

const Menu = (props:MenuProps) => {
    const activeMenu = props.activeMenu || "dashboard";

    return (
        <ul className={`${styles.menu}`}>
            {menuConfig.map((menuItem) => {
                if (menuItem?.type === 'separator') return (<hr className={styles.separator} />);
                const url = menuItem?.value || "/";
                return (
                    <MenuRow
                        key={menuItem.value}
                        icon={menuItem.icon}
                        name={menuItem.name}
                        value={url}
                        active={activeMenu === menuItem.value}
                    />
                );
            })}
        </ul>
    );
};

interface MenuProps {
    activeMenu: menuValues;
}

export default Menu;