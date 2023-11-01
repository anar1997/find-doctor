import Image from 'next/image'
import React from 'react'

const Cover = ({title}) => {
  return (
    <div className='cover'>
        <div className='cover-img'>
            {/* <Image src={logo} className='img' alt='picture of the author'/> */}
            <div className='container'>
                <p className='title'>{title}</p>
            </div>
        </div>
    </div>
  )
}

export default Cover