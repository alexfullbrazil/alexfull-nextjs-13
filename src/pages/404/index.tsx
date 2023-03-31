import Svg from '@/components/shared/svg';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      <div>
        <Svg src="/assets/404/oh.svg" width={150} color="var(--dark-blue)" />
      </div>
      <div>
        <Image
          src="/assets/404/404.png"
          alt="404"
          width={1080}
          height={614}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div>
        <Svg
          src="/assets/404/not-found.svg"
          width={150}
          color="var(--dark-blue)"
        />
        <Link href="/">
          <Svg src="/assets/404/back.svg" width={150} />
        </Link>
      </div>
    </div>
  );
}
