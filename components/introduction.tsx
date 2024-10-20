"use client"

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

import React from 'react'
import Link from 'next/link'

export default function Introduction() {
  return (
    <div className="z-20 w-full bg-white/60">
        <div className='z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2'>
            <Image src="/home-4.png" priority width="400" height="400" alt="Profile pic" />

            <div className="flex flex-col justify-center max-w-md">
                <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                    Si puedes pensarlo,
                    <TypeAnimation

                    sequence={[
                        "puedes programarlo", 1000,
                        "puedes optimizarlo", 1000,
                        "puedes implementarlo", 1000,
                        "puedes desarrollarlo", 1000,
                    ]} 
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                    className='block font-bold text-secondary'
                    
                    />

                </h1>

                <p className='mx-auto mb-2 text-xl md:mx-0 md:mb-8'>Como desarrollador front-end, me especializo en crear interfaces modernas, intuitivas y 100% personalizadas para que tu negocio destaque en el mundo digital.  </p>
         
                <div className='flex items-center justify-center gap-3 md:justify-start md:gap-10'>
                    <Link href="/projects" className='px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>
                         Ver Proyectos
                    </Link>

                    <Link href="/projects" className='px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary'>
                         Contáctame
                    </Link>
                </div>
                  
            </div>
        </div>
       
    </div>
  )
}
