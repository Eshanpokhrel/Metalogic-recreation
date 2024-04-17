import Image from 'next/image'
import './Description.scss'

interface myProps{
    title: string;
    heading: string;
    description: string;
    imgURL: string;
}

const Description = ({ title, heading, description, imgURL }:myProps) => {

  const image = imgURL

  return (
    <div className='container'>
        <div className="text-zone">
            <div className="red-text">
                <h4>{title}</h4>
            </div>
            <div className="heading">
                <h1>{heading}</h1>
            </div>
            <div className="desc">
                {description}
            </div>
        </div>
        <div className="img-container">
            <Image height={500} width={400} src={image} alt="laptop" />
        </div>
    </div>
  )
}

export default Description
