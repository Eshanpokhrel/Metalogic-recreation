import React from 'react'
import './Cards.scss'
import Image from 'next/image'
import scope from '../../public/scope.svg'

const Cards = () => {
  return (
    <div className='card'>
      <div className="img_wrapper">
        <Image className='image' src={scope} alt="image" height={70} width={70}/>
      </div>
      <div className="text_wrapper">
        <div className="title-text">
          precise scoping
        </div>
        <div className="desc-text">
          We took great care to ensure that all software needs were fully specified, without any ambiguities or inconsistencies. This helps us precisely plan the project and avoid scope creep in the future.
        </div>
      </div>
    </div>
  )
}

export default Cards
