"use client"

import React from 'react'
import MotionTransition from './transition-componet'
import Image from 'next/image'

export default function Avatar() {
  return (
    <MotionTransition position='bottom' className='bottom-0 right-0 hidden md:inline-block md:absolute'>
        <Image src="/avatar-1.png" width={350} height={350} className="w-full h-full" alt="Avatar" />
    </MotionTransition>
  )
}
