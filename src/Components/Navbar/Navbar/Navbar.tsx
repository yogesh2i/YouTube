import Image from 'next/image'
import React from 'react'
import styles from './Navbar.module.scss';
import { AndroidSearch, Search } from '../search/Search';
import { BiUserCircle } from 'react-icons/bi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoVideocamOutline } from 'react-icons/io5';
import Menu from '../Menu';
export default function Navbar() {

  return (
    <nav className={styles.main}>
      <div className={styles.left}>
        <span className={styles.menu}><Menu /></span>
        <div className={styles.logo}>
          <Image src='/logo.png' alt='YouTube' width={30} height={30} />
          <span className={styles.logo__text}>YouTube</span><sup>IN</sup>
        </div>
      </div>
      <div className={styles.center}>
        <Search />
      </div>
      <div className={styles.right}>
        <span><AndroidSearch /></span>
        <span><IoVideocamOutline /></span>
        <span><IoIosNotificationsOutline /></span>
        <span><BiUserCircle /></span>
      </div>

    </nav>
  )
}
