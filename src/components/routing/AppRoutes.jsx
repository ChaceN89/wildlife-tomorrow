import React from 'react'
import ColorBoxes from '@/components/development/ColorBoxes'
import Triangles from '@/components/common/triangleSeparator/TriangleSeparator'
import HexSeparator from '@/components/common/hexSeparator/HexSeparator'

export default function AppRoutes() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-neutral-alt p-20 overflow-x-hidden '>



      <div className='h-96 w-full border-4 bg-pink-400 flex items-center justify-center relative'>
        <div className='relative z-10'>
          Top section
        </div>
      </div>
      <Triangles bottom />
      <HexSeparator />


      {/* show extend downwards to cover child below */}

      <div className='h-96 w-full border-4 flex items-center justify-center'>
        bottom section
      </div>





      {/* <ColorBoxes /> */}
    </div>
  )
}
