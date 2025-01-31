'use client'
import React, { useEffect } from 'react';
import Content from '@/Components/Home/content/Content';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchHomeData } from '@/redux/slices/feedSlice';
import 'dotenv/config';


export default function Home() {
  const dispatch = useAppDispatch();
  const { feed, filters, status } = useAppSelector((state: any) => state.feedReducer);
  useEffect(() => {
    dispatch(fetchHomeData('https://yt-api.p.rapidapi.com/home'));
  }, [dispatch])
  return (

    <Content feed={feed} filters={filters} status={status} />

  )
}
