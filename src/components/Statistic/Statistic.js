import React from 'react';
import like from '/assets/img/like.svg';
import haha from '/assets/img/haha.svg';
import heart from '/assets/img/heart.svg';
import styles from './Statistic.module.scss';

export default function Statistic() {
	return (
		<div className={styles.statistic}>
			<div className={styles.left}>
				<div className={styles.reaction}>
					<img
						src={like}
						alt=''
						className={styles['reaction-img']}
						style={{ zIndex: '3' }}
					/>
					<img
						src={haha}
						alt=''
						className={styles['reaction-img']}
						style={{ zIndex: '2' }}
					/>
					<img
						src={heart}
						alt=''
						className={`${styles['reaction-img']} ${styles['mr8']}`}
						style={{ zIndex: '1' }}
					/>
					<span className={styles['count-text']}>2k</span>
				</div>
			</div>
			<div className={styles.right}>
				<a
					className={`${styles['comment-count']} ${styles['mr8']} ${styles['count-text']}`}
				>
					41 bình luận
				</a>
				<a
					className={`${styles['shared-count']} ${styles['count-text']}`}
				>
					83 lượt chia sẻ
				</a>
			</div>
		</div>
	);
}
