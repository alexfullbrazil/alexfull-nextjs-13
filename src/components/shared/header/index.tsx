import { ReactNode, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Svg from '@/components/shared/svg';
import Link from 'next/link';
import { ActiveLink } from '../active-link';
interface HeaderProps {
  children?: ReactNode;
}

const iconSize = 28;

export default function Header({ children }: HeaderProps) {
  const [navigation, setNavigation] = useState<boolean>(false);
  const [social, setSocial] = useState<boolean>(false);
  const [ontop, setOntop] = useState<boolean>(true);
  const [activeLink, setActiveLink] = useState<boolean>(false);

  const navigationRef = useRef(null);
  const socialRef = useRef(null);

  const toggleNavigation = () => {
    setNavigation(!navigation);
  };

  const handleClickOutside = (e: { target: any }) => {
    !navigationRef.current.contains(e.target) && setNavigation(false);
    !socialRef.current.contains(e.target) && setSocial(false);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    scrollPosition === 0 ? setOntop(true) : setOntop(false);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav
        ref={navigationRef}
        className={`main-navigation ${navigation ? 'active' : ''}`}
      >
        <ul>
          <li>
            <ActiveLink
              onClick={toggleNavigation}
              href="/"
              activeClassName="active-link"
            >
              <>Home</>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              onClick={toggleNavigation}
              href="/portfolio"
              activeClassName="active-link"
            >
              <>Portfolio</>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              onClick={toggleNavigation}
              href="/blog"
              activeClassName="active-link"
            >
              <>Blog</>
            </ActiveLink>
          </li>
        </ul>
      </nav>
      <div
        className={`header-wrapper ${navigation ? 'show-navigation' : ''} ${
          ontop ? 'on-top' : ''
        }`}
      >
        <div className="container">
          <div className="navigation-wrapper">
            <div>
              {navigation ? (
                <Svg
                  color="var(--dark-blue)"
                  size={32}
                  src="/assets/icons/clear.svg"
                  onClick={() => setNavigation(false)}
                  cursor="pointer"
                />
              ) : (
                <>
                  <Svg
                    color="var(--dark-blue)"
                    size={32}
                    src="/assets/icons/menu.svg"
                    onClick={toggleNavigation}
                    cursor="pointer"
                  />
                </>
              )}
            </div>

            <nav ref={socialRef} className="social-navigation-wrapper">
              <button
                className="trigger-social-navigation"
                onClick={() => setSocial(!social)}
              >
                <Svg
                  color="var(--dark-blue)"
                  size={iconSize}
                  src="/assets/icons/share.svg"
                />
              </button>
              <ul className={`social-navigation ${social ? 'active' : ''}`}>
                <li>
                  <a
                    target="_blanc"
                    href="https://www.behance.net/alexfullbrazil"
                  >
                    <Svg
                      color="var(--dark-blue)"
                      size={iconSize}
                      src="/assets/icons/behance.svg"
                    />
                  </a>
                </li>
                <li>
                  <a
                    target="_blanc"
                    href="https://www.instagram.com/alexfullbrazil/"
                  >
                    <Svg
                      color="var(--dark-blue)"
                      size={iconSize}
                      src="/assets/icons/instagram.svg"
                    />
                  </a>
                </li>
                <li>
                  <a
                    target="_blanc"
                    href="https://www.linkedin.com/in/alexfullbrazil/"
                  >
                    <Svg
                      color="var(--dark-blue)"
                      size={iconSize}
                      src="/assets/icons/linkedin.svg"
                    />
                  </a>
                </li>
                <li>
                  <a target="_blanc" href="https://github.com/alexfullbrazil">
                    <Svg
                      color="var(--dark-blue)"
                      size={iconSize}
                      src="/assets/icons/github.svg"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
