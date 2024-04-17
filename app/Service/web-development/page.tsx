"use client"
import Cards from '@/component/Cards/Cards'
import Description from '@/component/Decsription/Description'
import Marquee from '@/component/Marquee/Marquee'
import laptop from '../../../public/hero.svg'
import agile from '../../../public/ajile.svg'
import benefits from '../../../public/benifits.svg'
import customization from '../../../public/customization.svg'
import scope from '../../../public/scope.svg'
import cost from '../../../public/money.svg'
import quality from '../../../public/quality.svg'
import security from '../../../public/security.svg'
import adapt from '../../../public/collab.svg'
import project from '../../../public/document.svg'


import './style.scss'
import Accordian from '@/component/Accordian/Accordian'
import Banner from '@/component/Banner/Banner'
import Footer from '@/component/Footer/Footer'

const page = () => {

  return (
    <div className='dev-page'>
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
          <Cards title="precise scoping"
            desc="We took great care to ensure that all software needs were fully specified, without any ambiguities or inconsistencies. This helps us precisely plan the project and avoid scope creep in the future."
            source={scope}
            alt="precise scoping"/>

          <Cards title="Accurate cost projection"
            desc="In order to provide our clients with accurate estimates, we compute the project cost after carefully reviewing the work breakdown structure and software needs."
            source={cost}
            alt="Accurate cost projection"/>

          <Cards title="Management of quality"
            desc="Every step of the SDLC is integrated with quality assurance (QA) at Metalogic, ensuring that there are no serious flaws in the final product. Our quality management strategy complies with ISO 9001 requirements."
            source={quality}
            alt="Management of quality"/>

          <Cards title="Robust security"
            desc="We guarantee complete security for the project environment, digital assets and intellectual property belonging to our clients, and online software we develop."
            source={security}
            alt="Robust security"/>

          <Cards title="Adaptable cooperation"
            desc="We adjust our rate and manner of our interactions in line with our clients' requests to ensure transparency and steady progress in projects related to web development."
            source={adapt}
            alt="Adaptable cooperation"/>

          <Cards title="The whole set of project papers"
            desc="To enable future maintenance and modification of the program with ease, we meticulously record all significant choices made during the development process."
            source={project}
            alt="The whole set of project papers"/>
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

      <div className="faq">
        <h1><span className='green-text'>FAQs</span> (Frequently Asked Questions)</h1>

        <Accordian 
          question = "What types of websites does METALOGIC specialize in developing?" 
          answer = "METALOGIC specializes in developing a wide range of websites, including but not limited to e-commerce sites, corporate websites, blogs, and custom web applications. We tailor our approach based on your specific needs and goals."
        />
        <Accordian
          question = "What types of websites does METALOGIC specialize in developing?" 
          answer = "METALOGIC specializes in developing a wide range of websites, including but not limited to e-commerce sites, corporate websites, blogs, and custom web applications. We tailor our approach based on your specific needs and goals."
        />
        <Accordian
          question = "What types of websites does METALOGIC specialize in developing?" 
          answer = "METALOGIC specializes in developing a wide range of websites, including but not limited to e-commerce sites, corporate websites, blogs, and custom web applications. We tailor our approach based on your specific needs and goals."
        />
        <Accordian
          question = "What types of websites does METALOGIC specialize in developing?" 
          answer = "METALOGIC specializes in developing a wide range of websites, including but not limited to e-commerce sites, corporate websites, blogs, and custom web applications. We tailor our approach based on your specific needs and goals."
        />
        <Accordian
          question = "What types of websites does METALOGIC specialize in developing?" 
          answer = "METALOGIC specializes in developing a wide range of websites, including but not limited to e-commerce sites, corporate websites, blogs, and custom web applications. We tailor our approach based on your specific needs and goals."
        />
        <Accordian
          question = "What types of websites does METALOGIC specialize in developing?" 
          answer = "METALOGIC specializes in developing a wide range of websites, including but not limited to e-commerce sites, corporate websites, blogs, and custom web applications. We tailor our approach based on your specific needs and goals."
        />
        <Accordian
          question = "What types of websites does METALOGIC specialize in developing?" 
          answer = "METALOGIC specializes in developing a wide range of websites, including but not limited to e-commerce sites, corporate websites, blogs, and custom web applications. We tailor our approach based on your specific needs and goals."
        />
        <Accordian
          question = "What types of websites does METALOGIC specialize in developing?" 
          answer = "METALOGIC specializes in developing a wide range of websites, including but not limited to e-commerce sites, corporate websites, blogs, and custom web applications. We tailor our approach based on your specific needs and goals."
        />
        <Accordian
          question = "What types of websites does METALOGIC specialize in developing?" 
          answer = "METALOGIC specializes in developing a wide range of websites, including but not limited to e-commerce sites, corporate websites, blogs, and custom web applications. We tailor our approach based on your specific needs and goals."
        />
        <Accordian
          question = "What types of websites does METALOGIC specialize in developing?" 
          answer = "METALOGIC specializes in developing a wide range of websites, including but not limited to e-commerce sites, corporate websites, blogs, and custom web applications. We tailor our approach based on your specific needs and goals."
        />

        <Banner/>

        <Footer/>
      </div>
    </div>
  )
}

export default page
