import "./Banner.scss";
import Image from "next/image";
import img from '../../public/banner-bg.svg'

const Banner = () => {
  return (
    <div className="banner-container">
        <div className="image-container">
            <Image width={256} height={248} src={img} alt="image"/>
        </div>
        <div className="banner-textArea">
          <div className="banner-title">
            <h1>Have a Project in Mind?</h1>
          </div>
          <div className="banner-text">
            <p>Let's Connect and Ignite Success!</p>
          </div>
          <button>
            Get Your Quote 
            {/* <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right ">
                <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
            </svg> */}
          </button>
        </div>
    </div>
  );
};

export default Banner;
