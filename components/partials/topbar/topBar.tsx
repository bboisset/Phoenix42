import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Menu from './menu';
import Head from 'next/head';
import Link from 'next/link';

import styles from './topBar.module.css';

const defaultUser = {
	id: 0,
	login: 'Darren',
	image_url: 'https://avatars3.githubusercontent.com/u/17098281?s=460&v=4',
}

const TopBar = () => {
	const router = useRouter();
	const pageTitle = router.pathname.split('/')[1];

	const genSiteLogo = () => {
		return (
			<>
				<Image src="/logo.svg" width={50} height={50} layout="fixed" />
				<span className={styles.siteTitle}>Phoenix</span>
				<hr className={styles.vertical} />
			</>
		);
	}

	/**
	 * Generate the left part of top bar menu,
	 * containing the site logo and the page title
	 * @returns {JSX.Element}
	 */
	const genHome = () => {
		return (
			<Link href="/dashboard">
				<a>
					<div className={styles.home}>
						{genSiteLogo()}
						<span className={styles.title}>{pageTitle}</span>
					</div>
				</a>
			</Link>
		)
	}

	const genNavigation = (user: User) => {
		const date = new Date().toLocaleDateString("fr");

		return (
			<div className={styles.navigation}>
				<span className={styles.date}>{date}</span>
				<Menu user={user} />
			</div>
		);
	}

	return (
		<div className={`${styles.topBar} card`}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{genHome()}
			{genNavigation(defaultUser)}
		</div>
	);
};

export default TopBar;