import React from 'react';
import styles from './page.module.scss';
import Image from 'next/image';

export default function Page() {
  return (
    <div className={styles.channel__Container}>
      <div className={styles.left}>
        <Image src={'https://yt3.googleusercontent.com/ytc/AOPolaTS7Iz8LJFYtCIX3_LB4XY3mAR214x3MjOD37bXkQ=s176-c-k-c0x00ffffff-no-rj'} width={88} height={88} alt='avatar'/>
      </div>
      <div className={styles.center}>center</div>
      <div className={styles.right}>right</div>
    </div>
  )
}
