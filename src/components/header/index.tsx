import { ReactNode, useEffect, useState } from 'react';

import Icon from '@/components/icon';
import Link from 'next/link';
interface HeaderProps {
  children?: ReactNode;
}

const iconSize = 28;

export default function Header({ children }: HeaderProps) {
  const [show, setShow] = useState<boolean>(true);
  const [ontop, setOntop] = useState<boolean>(true);
  const [scroll, setScroll] = useState<number>(0);

  const navbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > scroll) {
        setShow(false);
      } else {
        setShow(true);
      }

      if (window.pageYOffset > 0) {
        setOntop(false);
      } else {
        setOntop(true);
      }
      setScroll(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', navbar);

      return () => {
        window.removeEventListener('scroll', navbar);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll]);

  return (
    <div className={`active ${!show && 'hidden'} ${ontop && 'on-top'}`}>
      <div className="container">
        <nav className="navigation">
          <ul className="nav-links">
            <li>
              <Link href="/">
                <Icon
                  color="var(--darkBlue)"
                  size={iconSize}
                  file="logo-alexfull-brazil"
                />
              </Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/posts">Blog</Link>
            </li>
          </ul>
          <ul className="social-links">
            <li>
              <a target="_blanc" href="https://www.behance.net/alexfullbrazil">
                <Icon color="var(--darkBlue)" size={iconSize} file="behance" />
              </a>
            </li>
            <li>
              <a
                target="_blanc"
                href="https://www.instagram.com/alexfullbrazil/"
              >
                <Icon
                  color="var(--darkBlue)"
                  size={iconSize}
                  file="instagram"
                />
              </a>
            </li>
            <li>
              <a
                target="_blanc"
                href="https://www.linkedin.com/in/alexfullbrazil/"
              >
                <Icon color="var(--darkBlue)" size={iconSize} file="linkedin" />
              </a>
            </li>
            <li>
              <a target="_blanc" href="https://github.com/alexfullbrazil">
                <Icon color="var(--darkBlue)" size={iconSize} file="github" />
              </a>
            </li>
          </ul>
        </nav>
        {children}
      </div>
    </div>
  );
}
