'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { menuButton } from '@/redux/slices/buttonSlice';
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Menu() {
  const dispatch = useAppDispatch();
  const menuState = useAppSelector((state) => state.buttonReducer.activeMenu);
  function handleMenu() {
    dispatch(menuButton(!menuState));
  }
  return (
    <>
      <span onClick={() => { handleMenu() }}><AiOutlineMenu /></span>
    </>
  )
}
