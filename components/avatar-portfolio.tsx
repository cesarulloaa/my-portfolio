"use client"

import React from 'react'
import MotionTransition from './transition-componet'
import Image from 'next/image'

export default function AvatarPortfolio() {
  return (
    <MotionTransition position='bottom' className='bottom-0 left-0 hidden md:inline-block md:absolute'>
        <Image src="/avatar-works.png" width={300} height={300} className='w-full h-full' alt='Avatar Portfolio' />
    </MotionTransition>
  )
}
