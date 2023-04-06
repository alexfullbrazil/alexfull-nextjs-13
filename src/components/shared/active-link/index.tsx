import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface ActiveLinkProps extends LinkProps {
  title?: string;
  children: ReactNode;
  activeClassName?: string;
  activeIdClassName?: string;
  onClick?: () => void;
}

export function ActiveLink({
  title,
  children,
  activeClassName,
  activeIdClassName,
  onClick,
  ...rest
}: ActiveLinkProps) {
  const { pathname } = useRouter();

  const verifyActiveLink = (loopPath: string) => {
    if (loopPath === '/' && pathname !== '/') {
      return null;
    }

    if (pathname.indexOf(loopPath) === 0) {
      return activeClassName;
    }
    return null;
  };

  const className = verifyActiveLink(rest.href as string);

  return (
    <Link onClick={onClick} {...rest} className={`${className}`} title={title}>
      {children}
    </Link>
  );
}
