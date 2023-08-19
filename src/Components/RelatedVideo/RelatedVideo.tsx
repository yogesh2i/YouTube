'use client'
import React from 'react';
import styles from './RelatedVideo.module.scss';
import Image from 'next/image';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';
import { TrendingShimmer } from '@/directives/Shimmer';
import { abbreviateNumber } from '@/directives/viewCount';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { updateChannelThumbnail } from '@/redux/slices/videoPlayerSlice';


interface userProps {
  videos: any,
  status: string
}


export default function RelatedVideo({ videos, status }: userProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  function playLink(videoId: string, channel: string) {
    router.push(`${videoId}`);
    dispatch(updateChannelThumbnail(channel))
  }



  return (
    <div className={styles.trendingFeed}>
      {videos && videos.map((item: any, i: number) => {
        if (item.type === 'video') {
          return <div className={styles.video__container} key={i} onClick={() => playLink(item.videoId, item?.channelThumbnail[0]?.url)}>
            <div className={styles.thumbnail} >
              <span>{item.lengthText}</span>
              <Image alt='thumbnail' src={item.thumbnail[0].url} fill></Image>
            </div>
            <div className={styles.video__info}>
              <div className={styles.video__title}><p>{item.title}</p><div className={styles.video__options}><PiDotsThreeOutlineVerticalFill /></div></div>
              <p className={styles.video__extra}>
                <span>{item.channelTitle}</span>
                <span>{abbreviateNumber(item.viewCount)} views</span>
                <span>{item.publishedTimeText}</span>
              </p>

            </div>
            <div className={styles.video__details_android}>
              <Image className={styles.channel__logo} alt='channel' src={item?.channelThumbnail[0].url} width={68} height={68}></Image>
              <div className={styles.video__text}>
                <p className={styles.video__title}>{item.title}</p>
                <p className={styles.channel__name}>{item.channelTitle}</p>
                <p>
                  <span className={styles.video__views}>{abbreviateNumber(item.viewCount)} views </span>
                  <span className={styles.video__published}>{item.publishedTimeText}</span>
                </p>
              </div>
            </div>
          </div>
        }
      })}

    </div>)
}



