import React from 'react';
import TopBar from './partials/topbar/topBar';
import Menu from './partials/menu/Menu';

import styles from "../styles/Layout.module.css";

const Layout = (props: LayoutProps) => {
	const { children, style, contentStyle, activeMenu } = props;

	console.log(`rendering layout`);
	return (
		<>
		<div id="layout" style={style}>
			<TopBar />
			<div id={styles.container}>
				<Menu activeMenu={activeMenu} />
				<div className="content" style={contentStyle}>
					{children}
				</div>
			</div>
		</div>
		<div id={styles.footer}>
			<span>UX / UI <b>dacohen</b> | dev <b>bboisset</b> and <b>abordack</b></span>
		</div>
		</>
	);
};

interface LayoutProps {
	children: React.ReactNode;
	style?: React.CSSProperties;
	contentStyle?: React.CSSProperties;
	activeMenu: menuValues;
}

export default Layout;