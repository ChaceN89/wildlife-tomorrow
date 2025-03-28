import React from 'react'
import ColorBoxes from '@/components/development/ColorBoxes'

export default function AppRoutes() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-tertiary'>
      <h1 className='text-4xl font-bold text-accent'>App Routes</h1>
      <ColorBoxes/>
    </div>
  )
}
