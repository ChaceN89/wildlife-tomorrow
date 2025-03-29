import HexSeparator from '@/components/common/hexSeparator/HexSeparator'
import TriangleSeparator from '@/components/common/triangleSeparator/TriangleSeparator'
import React from 'react'

export default function Home() {
  return (
    <div className=' w-screen flex items-center justify-center '>
      <div>
        <HexSeparator rows={10} />
        <div className='p-4 h-96 w-screen bg-primary '><span className='relative'>Home 1</span></div>
        <TriangleSeparator triangleClass="bg-accent-alt/50" rows={4} />
        <div className='p-4 h-96 w-screen bg-accent '><span className='relative'>Home 2</span></div>
        <TriangleSeparator triangleClass="bg-tertiary-alt/50" rows={4} />
        <div className='p-4 h-96 w-screen bg-tertiary '><span className='relative'>Home 2</span></div>

      </div>
    </div>
  )
}
