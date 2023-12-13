import logo from '../assets/logo/logo.svg';
import { HandCoins } from '@phosphor-icons/react';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <a href="/">
          <img src={logo} alt="黑新星" />
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a href="#donation" className="flex gap-2 btn btn-sm">
          <HandCoins size={24} />
          小額捐款
        </a>
        <ul className="flex justify-center gap-6">
          {[
            ["候選主張", "#clams"],
            ["最新活動", "#events"],
            ["政策議題", "#issues"],
            ["服務信箱", "#services"],
          ].map(([title, link], index) => (
            <li key={index}>
              <a
                href={link}
                className="text-black font-bold hover:text-primary-5"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex justify-center gap-4">
        {[
          ["facebook", "logo-facebook.svg", "#"],
          ["instagram", "logo-instagram.svg", "#"],
          ["youtube", "logo-youtube.svg", "#"],
        ].map(([title, src, link], index) => (
          <li key={index}>
            <a
              href={link}
              className="text-black font-bold hover:text-primary-5"
            >
              <img src={`src/assets/logo/${src}`} alt={title} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;