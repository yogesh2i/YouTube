'use client'
import { Skeleton } from '@mui/material';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'
import ReactPlayer from 'react-player';
import styles from './Video.module.scss';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { menuButton } from '@/redux/slices/buttonSlice';
import RelatedVideo from '@/app/watch/Components/RelatedVideo/RelatedVideo';
import { fetchVideoData } from '@/redux/slices/videoPlayerSlice';
import Image from 'next/image';
import { PiShareFatThin } from 'react-icons/pi';
import { GoDownload } from 'react-icons/go';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { abbreviateNumber } from '@/directives/viewCount';
import { TrendingShimmer } from '@/directives/Shimmer';

export default function Page() {
  const dispatch = useAppDispatch();
  const { video } = useParams();
  const { currentVid, relatedFeed, status, thumbnail } = useAppSelector((state) => state.videoPlayerData)

  useEffect(() => {
    dispatch(menuButton(true));
    dispatch(fetchVideoData(video));

  }, [dispatch, video]);
  if (status === 'idle' || status === 'pending') {
    return (
      <div className={styles.video__player}>
        <div className={styles.video__container}>
          <Skeleton variant='rectangular'>
            <ReactPlayer className={styles.video__box} playing={true} height={'31vw'} width={'100vw'} controls={true} />
          </Skeleton>
          <div className={styles.video__stats}>
            <Skeleton variant='text' width={'60vw'}> <p className={styles.video__title}></p></Skeleton>
            <div className={styles.video__options}>
              <div className={styles.channel__info}>
                <span>
                  <Skeleton variant='circular'><Image className={styles.channel__thumbnail} alt='channel' src={''} width={68} height={68} /></Skeleton>
                  <Skeleton width={'10vw'} height={'32px'} variant='text'></Skeleton>
                </span>
                <button type='button'>Subscribe</button>
              </div>
              <div className={styles.video__count}>
                <button type='button'><AiOutlineLike />| <AiOutlineDislike /></button>
                <button type='button'><PiShareFatThin />Share</button>
                <button type='button'><GoDownload />Download</button>
              </div>
            </div>
            <div className={styles.video__description}>
              <p> </p>

            </div>

          </div>
        </div>
        <div className={styles.related__playlist}>
          <TrendingShimmer></TrendingShimmer>
        </div>
      </div>
    )
  }
  else if (status === 'failed') {
    return (
      <p>Looks like we are facing some issue.Will be back soon.</p>
    )
  }
  else {
    return (
      <>
     
        {currentVid && 
          <div className={styles.video__player}>
            <div className={styles.video__container}>
              <ReactPlayer className={styles.video__box} playing={true} url={currentVid?.status!="fail"?currentVid?.formats[currentVid?.formats?.length-1]?.url:null} height={'31vw'} width={'auto'} controls={true} />
              <div className={styles.video__stats}>
                <p className={styles.video__title}>{currentVid.title}</p>
                <div className={styles.video__options}>
                  <div className={styles.channel__info}>
                    <span>
                      <Image className={styles.channel__thumbnail} alt='channel' src={thumbnail} width={68} height={68} />
                      <span>{currentVid.channelTitle}</span>
                    </span>
                    <button type='button'>Subscribe</button>
                  </div>
                  <div className={styles.video__count}>
                    <button type='button'><AiOutlineLike />{abbreviateNumber(currentVid.viewCount)} | <AiOutlineDislike /></button>
                    <button type='button'><PiShareFatThin />Share</button>
                    <button type='button'><GoDownload />Download</button>
                  </div>
                </div>
                <div className={styles.video__description}>
                  <p>{currentVid.viewCount} views</p>
                  {currentVid.description}
                </div>
                <div className={styles.video__comments}>
                  <p>Comments</p>
                  Available soon...
                </div>
              </div>
            </div>
            <div className={styles.related__playlist}>
              <RelatedVideo videos={relatedFeed} status={status} />
            </div>
          </div>}
      </>
    )
  }
}
