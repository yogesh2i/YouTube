'use client'
import Navbar from '@/Components/Navbar/Navbar/Navbar'
import React from 'react';
import styles from '@/app/page.module.scss';
import Sidebar from '@/Components/Home/sidebar/Sidebar';
import Footer from '@/Components/Footer/Footer';
import { useAppSelector } from '@/redux/hooks';


export default function HomeLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
      const expandSidebar = useAppSelector((state)=>state.buttonReducer.activeMenu);

  return (
    <>
       <Navbar/>
          <div className={styles.main}>
    <div className={`${styles.sidebar} ${expandSidebar?`${styles.short__sidebar}`:`${styles.expand__sidebar}`}`}> <Sidebar/></div>
    <div className={styles.content}>
        {children}
    </div>
     
   </div>
   <Footer/>
    </>
  )
}
