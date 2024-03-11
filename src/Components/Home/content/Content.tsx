'use client'
import React from 'react';
import styles from './Content.module.scss';
import Image from 'next/image';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';
import { useAppDispatch } from '@/redux/hooks';
import { fetchFilterData } from '@/redux/slices/feedSlice';
import { HomeShimmer } from '@/directives/Shimmer';
import { abbreviateNumber } from '@/directives/viewCount';
import { useRouter } from 'next/navigation';
import { updateChannelThumbnail } from '@/redux/slices/videoPlayerSlice';


export default function Content(props: any) {
  const { feed, filters, status } = props;
  const dispatch = useAppDispatch();
  const router = useRouter();

  function playLink(videoId: string, channel: string) {
    router.replace(`/watch/${videoId}`);
    dispatch(updateChannelThumbnail(channel))
  }


  function handleFilter(continuation: string) {
    if (continuation === undefined) {
      dispatch(fetchFilterData(`https://yt-api.p.rapidapi.com/home`))
    } else {
      dispatch(fetchFilterData(`https://yt-api.p.rapidapi.com/home?token=${continuation}`))
    }
  }
  if (status === 'idle' || status === 'pending') {
    return (
      <HomeShimmer />
    )
  } else {
    return (
      <div className={styles.content__container}>
        <div className={styles.search__filter}>
          <ul>
            {filters && filters.map((item: any, i: number) => {
              return <li key={item.filter} onClick={() => { handleFilter(item.continuation) }} className={styles.filter__name}>{item.filter}</li>
            })}

          </ul>
        </div>
        <div className={styles.video__content__container}>
          {feed && feed.map((item: any, i: number) => {
            if (item.type === 'video') {
              return <div className={styles.video__content} key={i} onClick={() => playLink(item.videoId, item?.channelThumbnail[0]?.url)}>
                <div className={styles.thumbnail}>
                 { <Image className={styles.img} alt='thumbnail' src={item.thumbnail[0].url} fill priority></Image>}
                  <span>{item.lengthText}</span>
                </div>
                <div className={styles.video__details}>
                  {item?.channelThumbnail?<Image className={styles.channel__logo} alt='channel' src={item?.channelThumbnail[0]?.url} width={68} height={68}></Image>:null}
                  <div className={styles.video__text}>
                    <p className={styles.video__title}>{item.title}</p>
                    <p className={styles.channel__name}>{item.channelTitle}</p>
                    <p>
                      <span className={styles.video__views}>{abbreviateNumber(item.viewCount)} views </span>
                      <span className={styles.video__published}>{item.publishedTimeText}</span>
                    </p>
                  </div>
                </div>
                <div className={styles.video__options}><PiDotsThreeOutlineVerticalFill /></div>

              </div>
            }
          })}

        </div>
      </div>
    )
  }
}
