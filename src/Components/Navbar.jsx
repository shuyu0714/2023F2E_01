import { useEffect, useState } from "react";
import logo from "../assets/logo/logo.svg";
import { HandCoins } from "@phosphor-icons/react";
import { List } from "@phosphor-icons/react/dist/ssr";

const Navbar = () => {
  const [isMobile, setisMobile] = useState(window.innerWidth > 768 ? false:true);
  const [showSidebar, setShowSidebar] = useState(false);

  // https://medium.com/@stheodorejohn/resize-and-scroll-event-listeners-in-react-enhancing-dynamic-user-experiences-6cdfa0074e2f
  useEffect(() => {
    const resizeHandler = () => { window.innerWidth > 768 ? setisMobile(false) : setisMobile(true) }

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    }
  }, []);

  const clickHandler = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <>
      <nav className="nav">
        <div className="w-full flex justify-between items-center">
          <div className="nav-brand">
            <a href="/">
              <img src={logo} alt="黑新星" />
            </a>
          </div>
          <div className="hidden lg:flex items-center gap-4">
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
          <ul className="hidden lg:flex justify-center gap-4">
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
          <button
            type="button"
            className="lg:hidden navbar-toggler"
            onClick={clickHandler}
          >
            <List size={32} />
          </button>
        </div>
      </nav>
      <div
        className={
          "lg:hidden fixed left-0 inset-y-0 w-2/5 bg-white bg-opacity-30 backdrop-blur-sm z-50 " +
          (showSidebar ? "" : "translate-x-full")
        }
        onClick={() => setShowSidebar(false)}
      ></div>
      <div
        className={
          "lg:hidden sidebar fixed right-0 inset-y-0 w-3/5 px-4 py-8 bg-white z-50 " +
          (showSidebar ? "" : "translate-x-full")
        }
      >
        <div className="nav-brand pb-8">
          <a href="/">
            <img src={logo} alt="黑新星" />
          </a>
        </div>
        <div className="lg:hidden text-left">
          <a href="#donation" className="inline-flex btn btn-sm mb-4">
            <HandCoins size={24} />
            小額捐款
          </a>
          <ul className=" flex flex-col text-left">
            {[
              ["候選主張", "#clams"],
              ["最新活動", "#events"],
              ["政策議題", "#issues"],
              ["服務信箱", "#services"],
            ].map(([title, link], index) => (
              <li key={index} className="mb-4">
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
        <ul className="lg:hidden pt-4 border-t border-grayScale-1">
          {[
            ["facebook", "logo-facebook.svg", "#"],
            ["instagram", "logo-instagram.svg", "#"],
            ["youtube", "logo-youtube.svg", "#"],
          ].map(([title, src, link], index) => (
            <li key={index} className="mb-4">
              <a
                href={link}
                className="text-black font-bold hover:text-primary-5 flex items-center capitalize"
              >
                <img src={`src/assets/logo/${src}`} alt={title} />
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;