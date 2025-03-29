import HexSeparator from '@/components/common/hexSeparator/HexSeparator'
import TriangleSeparator from '@/components/common/triangleSeparator/TriangleSeparator'
import React from 'react'

export default function Home() {
  return (
    <div className=' w-screen flex items-center justify-center '>
      <div>
        <HexSeparator rows={10} />
        <div className='p-4 h-96 w-screen bg-primary '>
          <div className='relative flex flex-col items-center justify-center'>

            <span className=' text-3xl'>Home page</span>
            <img src="/wildlife-tomorrow-logo.png" className='h-48 w-48' />
          </div>

        </div>
        <TriangleSeparator triangleClass="bg-accent-alt/50" rows={4} />
        <div className='p-4 h-96 w-screen bg-accent '><span className='relative'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum non harum unde, deserunt maiores aliquam voluptatibus minima doloribus blanditiis dolore et vitae excepturi aut similique veniam. Quae cumque esse ipsum.</span></div>
        <TriangleSeparator triangleClass="bg-tertiary-alt/50" rows={4} />
        <div className='p-4 h-96 w-screen bg-tertiary '><span className='relative'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus voluptates, inventore esse adipisci voluptatum amet ipsum repudiandae corporis fugit excepturi dolor perferendis ipsa similique eos libero. Quod, modi ea!</span></div>

      </div>
    </div>
  )
}
