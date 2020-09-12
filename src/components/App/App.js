import React from 'react';
import Head from 'Components/Head/Head';
import Body from 'Components/Body/Body';
import Statistic from 'Components/Statistic/Statistic';
import Bottom from 'Components/Bottom/Bottom';
import styles from './App.module.scss';

export default function App() {
	return (
		<div id='app' className={styles.app}>
			<div>
				<Head />
			</div>
			<div className={styles.mt8}>
				<Body />
			</div>
			<div>
				<Statistic />
			</div>
			<div>
				<Bottom />
			</div>
		</div>
	);
}
