"use client"
import Cards from '@/component/Cards/Cards'
import Description from '@/component/Decsription/Description'
import Marquee from '@/component/Marquee/Marquee'
import laptop from '../../../public/hero.svg'
import agile from '../../../public/ajile.svg'
import benefits from '../../../public/benifits.svg'
import customization from '../../../public/customization.svg'
import './style.scss'

const page = () => {

  return (
    <div>
      <Description
       title="Website Development" 
       heading='Scalable & Seamless Web Development'
       description='Engage users with lightning-fast and reliable Progressive Web Apps. We harness the power of modern web technologies to deliver app-like experiences directly through browsers.'
       imgURL={laptop}
       ord={0}
      />

      <Marquee/>

      <div className='technical_section'>
        <h1>
          How the Web Development Project Quality Is Assured
        </h1>
        <div className='details'>
          Other than technical expertise, a wide range of other factors may directly or indirectly affect the quality of the program and the project's conclusion. At Metalogic, we value every single one of them greatly.
        </div>
        <div className="cardContainer">
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
        </div>
      </div>
      
      <Description
        title="Our Methodology" 
        heading='Agile development methodology'
        description='We use the agile development methodology to minimize risk, such as bugs, cost overruns, and changing requirements, when adding new functionality. In our approach, we develop the software in iterations that contain mini-increments of the new functionality. We consider different forms of the agile development method, including scrum, crystal, extreme programming (XP), and feature-driven development (FDD).'
        imgURL={agile}
        ord={1}
      />
      <Description
        title="customization and scalability" 
        heading='Crafting Solutions Just for You'
        description='Discover how we personalize your experience with customized features and effortlessly scale your system to match your growing needs. Our approach ensures that your software is uniquely tailored to fit your business, allowing you to adapt easily and efficiently. Explore simplicity and adaptability in our Customization and Scalability.'
        imgURL={customization}
        ord={0}
      />
      <Description
        title="Benefits of working with us" 
        heading='Reliability in Partnership'
        description='Rely on us for more than just solutions—rely on a steadfast partnership. Discover the assurance of reliability, commitment, and a shared commitment to your sustained success.'
        imgURL={benefits}
        ord={1}
      />
    </div>
  )
}

export default page
