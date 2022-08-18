import React from 'react';
import TopBar from './partials/topbar/topBar';
import Menu from './partials/menu/Menu';

import styles from "../styles/Layout.module.css";

const Layout = (props:LayoutProps) => {
    const {children} = props;

    return (
        <div id="layout">
            <TopBar />
            <div id={styles.container}>
                <Menu />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
};

interface LayoutProps {
    children: React.ReactNode;
}

export default Layout;