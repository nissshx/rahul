"use client"
import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Header'
import Dashboard from './components/Main'
import noto from './font'

const Page = () => {
  return (
    <main className={noto.className}>
    <div className='flex h-screen w-screen'>
      <Sidebar className='w-4/12 h-full' />
      <div className='flex flex-col flex-1'>
        <Navbar className='w-8/12' />
        <Dashboard className='flex-1 p-6 overflow-auto w-8/12' />
      </div>
    </div>
    </main>
  )
}

export default Page