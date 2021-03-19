import React from 'react';
import styles from './index.less';
import welImg from '../../assets/Welcome.png'
import { connect } from 'umi';
import type { ConnectState } from '@/models/connect';
import type { CurrentUser } from '@/models/user';
import { formatTime } from '@/utils/utils';

type UserProps = {
  currentUser?: CurrentUser;
} & ConnectProps;

const HomeLayout:React.FC<UserProps> =(props) => {
  const {currentUser} = props
  const time:string = formatTime() || ''
  return (
    <div className={styles.homeBg}>
      <div className={styles.header}>
        <img className={styles.avatar} alt="avatar" src={currentUser.avatar} />
        <div className={styles.welcomeTip}>
            <div className={styles.wel}>
              <span>欢迎，{currentUser.name}，</span>
              <span>今天是{time}</span>
            </div>
            <div className={styles.userType}>超级管理员</div>
        </div>
      </div>
      <div className={styles.welComeBox}>
         <img src={welImg} alt="wel" className={styles.welImg}/>
         <div className={styles.tips}>早上好，一起开启能量满满的一天吧~</div>
      </div>
    </div>
  );
}

export default connect(({ user }: ConnectState) => ({
  currentUser: user.currentUser
}))(HomeLayout);
