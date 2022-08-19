import React from 'react';
import TopBar from './partials/topbar/topBar';
import Menu from './partials/menu/Menu';

import styles from "../styles/Layout.module.css";

const Layout = (props:LayoutProps) => {
    const {children, style, contentStyle} = props;

    return (
        <div id="layout" style={style}>
            <TopBar />
            <div id={styles.container}>
                <Menu />
                <div className="content" style={contentStyle}>
                    {children}
                </div>
            </div>
        </div>
    );
};

interface LayoutProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
}

export default Layout;