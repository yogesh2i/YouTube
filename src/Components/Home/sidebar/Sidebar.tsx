'use client'
import React from 'react';
import styles from './Sidebar.module.scss';
import { GoHistory, GoHome, GoVideo } from 'react-icons/go';
import { MdOutlineFeedback, MdOutlineLibraryAddCheck, MdOutlineLocalFireDepartment, MdOutlineLocalMall, MdOutlineSubscriptions } from 'react-icons/md';
import Link from 'next/link';
import { BsCameraReels } from 'react-icons/bs';
import { IoHelpCircleOutline, IoMusicalNoteOutline, IoNewspaperOutline, IoRadioOutline, IoSchoolOutline, IoSettingsOutline, IoTimeOutline } from 'react-icons/io5';
import { BiLike } from 'react-icons/bi';
import { IoIosAddCircleOutline, IoIosColorWand } from 'react-icons/io';
import { PiFilmSlate, PiFlag, PiGameControllerLight, PiTrophyLight } from 'react-icons/pi';
import { AiFillYoutube } from 'react-icons/ai';
import { SiYoutubemusic, SiYoutubestudio } from 'react-icons/si';
import { TfiYoutube } from 'react-icons/tfi';
import { useAppSelector } from '@/redux/hooks';

export default function Menu() {
  const activeMenu = useAppSelector((state) => state.buttonReducer.activeMenu);
  return (
    <>
      {!activeMenu ?
        <div className={styles.sidebar}>
          <Link href='/' className={styles.sidebar__button} title='Home'><GoHome /> Home</Link>
          <Link href='/' className={styles.sidebar__button} title='Shorts'><BsCameraReels /> Shorts</Link>
          <Link href='/' className={styles.sidebar__button} title='Subscriptions'><MdOutlineSubscriptions /> Subsciptions</Link>
          <span className={styles.ruler}></span>
          <Link href='/' className={styles.sidebar__button} title='Library'><MdOutlineLibraryAddCheck /> Library</Link>
          <Link href='/' className={styles.sidebar__button} title='History'><GoHistory /> History</Link>
          <Link href='/' className={styles.sidebar__button} title='Your Videos'><GoVideo /> Your videos</Link>
          <Link href='/' className={styles.sidebar__button} title='Watch Later'><IoTimeOutline /> Watch Later</Link>
          <Link href='/' className={styles.sidebar__button} title='Liked Videos'><BiLike /> Liked videos</Link>
          <span className={styles.ruler}></span>
          <span className={styles.title}>Subscriptions</span>
          <Link href='/' className={styles.sidebar__button} title='Browse channels'><IoIosAddCircleOutline /> Browse channels</Link>
          <span className={styles.ruler}></span>
          <span className={styles.title}>Explore</span>
          <Link href='/feed/trending' className={styles.sidebar__button} title='Trending'><MdOutlineLocalFireDepartment />Trending</Link>
          <Link href='/' className={styles.sidebar__button} title='Shopping'><MdOutlineLocalMall />Shopping</Link>
          <Link href='/' className={styles.sidebar__button} title='Music'><IoMusicalNoteOutline />Music</Link>
          <Link href='/' className={styles.sidebar__button} title='Films'><PiFilmSlate />Films</Link>
          <Link href='/' className={styles.sidebar__button} title='Live'><IoRadioOutline />Live</Link>
          <Link href='/' className={styles.sidebar__button} title='Gaming'><PiGameControllerLight />Gaming</Link>
          <Link href='/' className={styles.sidebar__button} title='News'><IoNewspaperOutline />News</Link>
          <Link href='/' className={styles.sidebar__button} title='Sport'><PiTrophyLight />Sport</Link>
          <Link href='/' className={styles.sidebar__button} title='Learning'><IoSchoolOutline />Learning</Link>
          <Link href='/' className={styles.sidebar__button} title='Fashion'><IoIosColorWand />Fashion & Beauty</Link>
          <span className={styles.ruler}></span>
          <span className={styles.title}>More from YouTube</span>
          <Link href='/' className={styles.sidebar__button}><span className={styles.youtube__icon}><AiFillYoutube /></span>YouTube Premium</Link>
          <Link href='/' className={styles.sidebar__button}><span className={styles.youtube__icon}><SiYoutubestudio /></span>YouTube Studio</Link>
          <Link href='/' className={styles.sidebar__button}><span className={styles.youtube__icon}><SiYoutubemusic /></span>YouTube Music</Link>
          <Link href='/' className={styles.sidebar__button}><span className={styles.youtube__icon}><TfiYoutube /></span>YouTube Kids</Link>

          <span className={styles.ruler}></span>
          <Link href='/' className={styles.sidebar__button}><IoSettingsOutline />Settings</Link>
          <Link href='/' className={styles.sidebar__button}><PiFlag />Report History</Link>
          <Link href='/' className={styles.sidebar__button}><IoHelpCircleOutline />Help</Link>
          <Link href='/' className={styles.sidebar__button}><MdOutlineFeedback />Send Feedback</Link>

          <span className={styles.ruler}></span>
          <p className={styles.extra__links__container}>
            <Link href='/about' className={styles.extra__links}>About</Link>
            <Link href='/about' className={styles.extra__links}>Press</Link>
            <Link href='/about' className={styles.extra__links}>Copyright</Link>
            <Link href='/about' className={styles.extra__links}>Contact Us</Link>
            <Link href='/about' className={styles.extra__links}>Advertise</Link>
            <Link href='/about' className={styles.extra__links}>Developers</Link>
          </p>
          <p className={styles.extra__links__container}>
            <Link href='/about' className={styles.extra__links}>Terms</Link>
            <Link href='/about' className={styles.extra__links}>Privacy</Link>
            <Link href='/about' className={styles.extra__links}>Policy & Safety</Link>
            <Link href='/about' className={styles.extra__links}>How YouTube works</Link>
            <Link href='/about' className={styles.extra__links}>New features</Link>
          </p>
          <p className={styles.extra__links__container}>
            <Link href='/about' className={styles.extra__links}>&copy; 2023 Google LLC</Link>
          </p>






        </div> : <div className={styles.collapsed__sidebar}>
          <Link href='/' className={styles.sidebar__button} title='Home'><GoHome /> Home</Link>
          <Link href='/' className={styles.sidebar__button} title='Shorts'><BsCameraReels /> Shorts</Link>
          <Link href='/' className={styles.sidebar__button} title='Subscriptions'><MdOutlineSubscriptions /> Subsciptions</Link>
          <Link href='/' className={styles.sidebar__button} title='Library'><MdOutlineLibraryAddCheck /> Library</Link>

        </div>}

    </>
  )
}
