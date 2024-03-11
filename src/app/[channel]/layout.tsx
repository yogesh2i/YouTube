import { AltRoute } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'

export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <>
      <div style={{position:'relative',height:'175px'}}>
        <Image src={'https://yt3.googleusercontent.com/bUKFvxFrn7qhxX8s4k0MeXaMrGhEuL2-V9jkdDSvKMXFmkFRFxDq5m9SvmIKjFmPHLmt2x-5=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'} alt='banner' fill  />
      </div>
      {children}
    </>
  )
}
