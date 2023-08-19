'use client'
import React from 'react';
import styles from './Trending.module.scss';
import Image from 'next/image';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';
import { TrendingShimmer } from '@/directives/Shimmer';
import { abbreviateNumber } from '@/directives/viewCount';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { updateChannelThumbnail } from '@/redux/slices/videoPlayerSlice';


interface userProps {
  trending: any,
  status: string
}


export default function TrendingFeed({ trending, status }: userProps) {

  const router = useRouter();
  const dispatch = useAppDispatch();
  function playLink(videoId: string, channel: string) {
    router.replace(`/watch/${videoId}`);
    dispatch(updateChannelThumbnail(channel))
  }

  if (status == 'idle' || status == 'pending')
    return (<TrendingShimmer />
    )
  else {
    return (
      <div className={styles.trendingFeed}>
        {trending && trending.map((item: any, i: number) => {
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
                <p className={styles.video__description}>{item.description}</p>
              </div>
              <div className={styles.video__details_android}>
                <Image className={styles.channel__logo} alt='channel' src={item.channelThumbnail[0].url} width={68} height={68}></Image>
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

}
