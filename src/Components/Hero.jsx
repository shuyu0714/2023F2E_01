import vote from '../assets/logo/logo-vote.svg';
import candidate from '../assets/candidate.png';

const Hero = () => {
  return (
    <div className="hero-main relative">
      <div className="hero-bg bg-grayScale-2 rounded-2xl px-[2.695vw] mx-auto text-left">
        <h1 className="text-white">
          喵喵權益
          <br />
          我帶頭
        </h1>
      </div>
      <div className="absolute hero-vote-number bg-black text-primary-3 rounded-full">
        <div className="inline-flex items-center gap-2 text-head px-8 py-2">
          <img src={vote} alt="" />
          立委請支持
          <div className="number rounded-full border-[3px] border-current w-7 h-7 leading-[60px]">1</div>
          黑新星
          <img src={vote} alt="" />

        </div>
      </div>
      <div className="absolute candidate -right-4 -bottom-4">
        <div className="candidate-img">
          <img src={candidate} alt="candidate" />
        </div>
      </div>
    </div>
  );
}

export default Hero;