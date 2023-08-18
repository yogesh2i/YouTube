import { Skeleton } from '@mui/material';
import styles from './Shimmer.module.scss';
const fakeArr =   new Array(6).fill('');
export function TrendingShimmer(){

    return (<>
        {fakeArr.map((i,index:number=0)=>{
          index++;
        return (
        <>
        <div className={styles.shimmer__effect_web} key={index}>
                <Skeleton variant='rounded' width={'20vw'} height={190} animation='wave'></Skeleton>
                <div>
                  <Skeleton width={'40vw'} height={30} variant='text' animation='wave'/>
                  <p>
                  <Skeleton width={'20vw'} height={18} variant='text' animation='wave'/>
                  <Skeleton width={'40vw'} height={40} variant='text' animation='wave'/>
                  </p>
                </div>
              </div>
      <div className={styles.shimmer__effect_android} key={index}>
                <Skeleton variant='rounded' width={'100vw'} height={230} animation='wave'></Skeleton>
                <div>
                  <Skeleton width={40} height={40} variant='circular' animation='wave'/>
                  <p>
                  <Skeleton width={'70vw'} height={30} variant='text' animation='wave'/>
                  <Skeleton width={'50vw'} height={18} variant='text' animation='wave'/>
                  </p>
                </div>
              </div></>)
              })}
         </>
              )
}

export function HomeShimmer(){
    return (
        <div className={styles.shimmer}>
        {fakeArr.map((i,index:number=0)=>{
          index++;
          return (<>
          <div className={styles.shimmer__effect_android} key={index}>
          <Skeleton variant='rounded' width={'100vw'} height={230}  animation='wave'></Skeleton>
          <div>
          <Skeleton width={40} height={40} variant='circular' animation='wave'/>
          <p>
          <Skeleton width={'70vw'} height={30} variant='text' animation='wave'/>
          <Skeleton width={'50vw'} height={18} variant='text' animation='wave'/>
          </p>
          </div>
          </div>
        
         <div className={styles.shimmer__effect_web} key={index}>
          <Skeleton variant='rounded' width={'25vw'} height={190} animation='wave'></Skeleton>
          <div>
          <Skeleton width={40} height={40} variant='circular' animation='wave'/>
          <p>
          <Skeleton width={'15vw'} height={30} variant='text' animation='wave'/>
          <Skeleton width={'10vw'} height={18} variant='text' animation='wave'/>
          </p>
           </div>
          </div>
       
       </>)
       
     })}
         </div>
      )
}
