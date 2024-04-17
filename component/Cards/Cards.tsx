import React from 'react'
import './Cards.scss'
import Image from 'next/image'
import scope from '../../public/scope.svg'

interface cardProps {
  title: string;
  desc: string;
  source: string;
  alt: string
}

const Cards = ({ title, desc, source, alt }: cardProps) => {

  const image = source;

  return (
    <div className='card'>
      <div className="img_wrapper">
        <Image className='image' src={image} alt={alt} height={70} width={70}/>
      </div>
      <div className="text_wrapper">
        <div className="title-text">
          {title}
        </div>
        <div className="desc-text">
          {desc}
        </div>
      </div>
    </div>
  )
}

export default Cards
