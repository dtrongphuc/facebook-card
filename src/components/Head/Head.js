import React from 'react';
import style from './Head.module.scss';

export default function Head() {
	return (
		<div className={style.head}>
			<div className={style.left}>
				<a href=''>
					<div className={style.avatar} />
				</a>
				<div>
					<div className={style.top}>
						<div className={style.nameWrapper}>
							<a href=''>
								<span className={style.name}>Anh Khoa</span>
							</a>
						</div>
						<div className={style.group}></div>
					</div>
					<div className={style.bottom}>
						<div className={style.timeStampWrapper}>
							<a href='/' className={style.timestamp}>
								25 tháng 8 lúc 19:55
							</a>
						</div>
						<div className={style.status}></div>
					</div>
				</div>
			</div>
			<div className={style.right}></div>
		</div>
	);
}
