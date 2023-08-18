import React from 'react';
import styles from './Footer.module.scss';
import {GoHome} from 'react-icons/go';
import {MdOutlineExplore, MdOutlineLibraryAddCheck, MdOutlineSubscriptions} from 'react-icons/md';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles.footer__container}>
        <Link href='/' className={styles.button}>
          <GoHome/>
          <p>Home</p>
        </Link>
        <Link href='/feed/trending' className={styles.button}>
            <MdOutlineExplore/>
            <p>Trending</p>
        </Link>
        <Link href='/' className={styles.button}>
        <MdOutlineSubscriptions/>
            <p>Subscriptions</p>
        </Link>
        <Link href='/' className={styles.button}>
            <MdOutlineLibraryAddCheck/>
            <p>Library</p>
        </Link>
      
    </div>
  )
}
