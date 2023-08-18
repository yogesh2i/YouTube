'use client'
import React, {useEffect} from 'react';
import trendStyle from './Trending.module.scss';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchTrendingData } from '@/redux/slices/feedSlice';
import TrendingFeed from './TrendingFeed';
import Image from 'next/image';


export default function Trending({params}:{ params : {trending : string}}) {
  const dispatch = useAppDispatch();
  const {trending,status} = useAppSelector((state:any)=>state.feedReducer);
  function callFetch(type:string){
    dispatch(fetchTrendingData(`https://yt-api.p.rapidapi.com/trending?geo=IN&type=${type}`));
   
  }
  useEffect(()=>{
    callFetch('now');
  },[]);
 
  return (
      <>
      <div className={trendStyle.top}>
        <Image className={trendStyle.img} src={'https://www.youtube.com/img/trending/avatar/trending.png'} alt='Trending' width={80} height={80}></Image>
        <div className={trendStyle.paramName}>{params.trending}</div>
      </div>
      <div className={trendStyle.link__drawer}>
         <span onClick={()=>{callFetch('now')}}>NOW</span>
         <span onClick={()=>{callFetch('music')}}>MUSIC</span>
         <span onClick={()=>{callFetch('games')}}>GAMING</span>
         <span onClick={()=>{callFetch('movies')}}>FILMS</span>
      </div>
      <hr className={trendStyle.ruler}/>
      <TrendingFeed trending={trending} status={status}/>
      </>
    
    
  )
}
