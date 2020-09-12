import React from 'react';
import styles from './Bottom.module.scss';

export default function Bottom() {
	return (
		<div className={styles.bottom}>
			<div className={styles.btn}>
				<span>
					<i className={`${styles['icon']} ${styles['like']}`}></i>
				</span>
				<span className={styles.text}>Thích</span>
			</div>
			<div className={styles.btn}>
				<span>
					<i className={`${styles['icon']} ${styles['comment']}`}></i>
				</span>
				<span className={styles.text}>Bình luận</span>
			</div>
			<div className={styles.btn}>
				<span>
					<i className={`${styles['icon']} ${styles['share']}`}></i>
				</span>
				<span className={styles.text}>Chia sẻ</span>
			</div>
		</div>
	);
}
