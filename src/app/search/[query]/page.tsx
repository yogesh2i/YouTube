'use client'
import Content from '@/Components/Home/content/Content'
import { useAppSelector } from '@/redux/hooks';
import React from 'react'

export default function Page() {
    const {feed,filters,status} = useAppSelector((state:any)=>state.feedReducer);
  return (
    <>
      <Content  feed={feed} filters={filters} status={status} />
    </>
  )
}
