import { ReactNode, useEffect, useRef, useState } from 'react';

import Svg from '@/components/shared/svg';
import Link from 'next/link';
interface HeaderProps {
  children?: ReactNode;
}

const iconSize = 28;

export default function Header({ children }: HeaderProps) {
  const [navigation, setNavigation] = useState<boolean>(false);

  const toggleNavigation = () => {
    setNavigation((prev) => !prev);
  };

  const navigationRef = useRef(null);

  const handleClickOutside = (e: { target: any }) => {
    if (
      navigationRef.current &&
      typeof navigationRef.current.contains === 'function' &&
      !navigationRef.current.contains(e.target)
    ) {
      setNavigation(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <>
      <nav
        ref={navigationRef}
        className={`main-navigation ${navigation ? 'active' : ''}`}
      >
        <ul>
          <li>
            <Link onClick={toggleNavigation} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={toggleNavigation} href="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link onClick={toggleNavigation} href="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`header-wrapper ${navigation ? 'show-navigation' : ''}`}>
        <div className="container">
          <div className="navigation-wrapper">
            <div>
              {navigation ? (
                <Svg
                  color="var(--darkBlue)"
                  size={32}
                  src="/assets/icons/clear.svg"
                  onClick={() => setNavigation(false)}
                  cursor="pointer"
                />
              ) : (
                <>
                  <Svg
                    color="var(--darkBlue)"
                    size={32}
                    src="/assets/icons/menu.svg"
                    onClick={toggleNavigation}
                    cursor="pointer"
                  />
                </>
              )}
            </div>

            <nav className="social-navigation">
              <ul>
                <li>
                  <a
                    target="_blanc"
                    href="https://www.behance.net/alexfullbrazil"
                  >
                    <Svg
                      color="var(--darkBlue)"
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
                      color="var(--darkBlue)"
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
                      color="var(--darkBlue)"
                      size={iconSize}
                      src="/assets/icons/linkedin.svg"
                    />
                  </a>
                </li>
                <li>
                  <a target="_blanc" href="https://github.com/alexfullbrazil">
                    <Svg
                      color="var(--darkBlue)"
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
