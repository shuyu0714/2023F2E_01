import vote from '../assets/logo/logo-vote.svg';
import candidate from '../assets/candidate.png';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

const Hero = () => {
  return (
    <div className="hero-main relative flex flex-col md:block md:mx-0 -mx-4">
      <div className="relative order-1 md:mt-0 -mt-6">
        <div className="hero-bg bg-grayScale-2 rounded-2xl pl-[2.695vw] pr-[1.835vw] mx-auto text-left">
          <h1 className="text-white">
            喵喵權益
            <br />
            我帶頭
          </h1>
        </div>
        <div className="absolute hero-vote-number bg-black text-primary-3 rounded-full md:-mt-4 -mt-1">
          <div className="inline-flex items-center gap-2 text-head xl:px-8 xl:py-2 px-4 py-1">
            <img src={vote} className="xl:w-7 md:w-[5vw] w-[8.533vw]" alt="vote logo" />
            立委請支持
            <div className="number rounded-full border-[3px] border-current xl:w-7 xl:h-7 xl:leading-[60px] md:w-[5vw] md:h-[5vw] leading-[1.3] w-[8.533vw] h-[8.533vw]">
              1
            </div>
            黑新星
            <img src={vote} className="xl:w-7 md:w-[5vw] w-[8.533vw]" alt="vote logo" />
          </div>
        </div>
      </div>
      <div className="z-10 relative self-center md:absolute candidate md:-right-4 md:-bottom-4">
        <div className="candidate-img">
          <img src={candidate} alt="candidate" />
        </div>
        <a className="absolute inline-flex btn btn-sm mb-4 left-0 bottom-8">
          <span className="mr-2">候選人簡介</span>
          <ArrowRight size={24} />
        </a>
      </div>
    </div>
  );
}

export default Hero;