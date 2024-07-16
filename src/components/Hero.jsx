import { HERO_CONTENT } from '../constants/index';
import profilePic from '../assets/profilePic.jpg';


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
           <h1 className='pt-8 pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl'>Brandon Dell Cioppia</h1>
            <span className="pb-8 bg-gradient-to-r from-blue-300 via-slate-500 to bg-blue-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter lg:text-2xl">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-10">
          <div className="flex justify-center">
            <img src={profilePic} alt="Profile Picture" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
