import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import Features from '@/components/Features'
import CallToAction from '@/components/CallToAction'
import Steps from '@/components/Steps'


export default function Home() {
  return (
    <>
      <NavBar />
      <div className='space-y-40'>
        <Hero />
        <AboutUs />
        <Features />
        <CallToAction />
        <Steps />
        <Features />

      </div>
    </>

  )
}
