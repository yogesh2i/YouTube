'use client'
import { useAppDispatch } from '@/redux/hooks'
import { menuButton } from '@/redux/slices/buttonSlice';
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Menu() {
    const dispatch = useAppDispatch();
    function handleMenu(){
       dispatch(menuButton());
    }
  return (
    <>
     <span onClick={()=>{handleMenu()}}><AiOutlineMenu/></span> 
    </>
  )
}
