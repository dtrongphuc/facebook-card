import React from 'react';
import img from '/assets/img/avatar.jpeg';
import styles from './Body.module.scss';

export default function Body() {
	return (
		<div>
			<div className={styles.py16}>
				<span className={styles.text}>Facebook card status</span>
			</div>
			<div className={styles.mt8}>
				<img
					src={img}
					alt=''
					style={{ width: '100%', cursor: 'pointer' }}
				/>
			</div>
		</div>
	);
}
