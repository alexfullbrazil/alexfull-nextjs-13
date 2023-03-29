import Image from 'next/image';
import Link from 'next/link';

interface SearchResultsProps {
  title?: string;
  slug?: string;
  excerpt?: string;
  coverImage?: string;
  authorPicture?: string;
  authorName?: string;
  createdAt?: string;
  onClick?(arg: any): void;
}

export default function SearchResults({
  title,
  slug,
  excerpt,
  coverImage,
  onClick,
}: SearchResultsProps) {
  return (
    <li className="search-results-item">
      <Link
        href={`blog/${slug}`}
        className="search-results-grid"
        onClick={onClick}
      >
        <Image
          className="search-results-cover-image"
          src={coverImage}
          alt={title}
          width={48}
          height={48}
          priority
          style={{ background: 'var(--lightGrey)' }}
        />

        <div className="search-results-content">
          <div className="search-results-title">{title}</div>
          <div className="search-results-excerpt">{excerpt}</div>
        </div>
      </Link>
    </li>
  );
}
