import Link from 'next/link';
import Image from 'next/image';

interface FeaturedPostsProps {
  title?: string;
  slug?: string;
  excerpt?: string;
  coverImage?: string;
  width?: number;
  height?: number;
  authorPicture?: string;
  authorName?: string;
  createdAt?: string;
}

export default function FeaturedPosts({
  title,
  slug,
  excerpt,
  coverImage,
  width,
  height,
  authorPicture,
  authorName,
  createdAt,
}: FeaturedPostsProps) {
  return (
    <div className="featured-posts-wrapper">
      <div className="featured-posts-content">
        <span className="featured-tag">Featured</span>
        <Link href={`posts/${slug}`}>
          <h2 className="featured-posts-title">{title}</h2>
        </Link>
        <p className="featured-posts-excerpt">{excerpt}</p>
        <div className="featured-posts-footer">
          <div className="featured-posts-author-grid">
            <Image
              className="featured-posts-author-picture"
              src={authorPicture}
              alt={title}
              width={42}
              height={42}
              priority
              style={{ background: 'var(--lightGrey)' }}
            />
            <div>
              <div className="featured-posts-author-name">{authorName}</div>
              <time className="featured-posts-created-at">{createdAt}</time>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-posts-cover-image-wrapper">
        <Link href={`posts/${slug}`}>
          <Image
            className="featured-posts-cover-image"
            src={coverImage}
            width={width}
            height={height}
            alt={title}
            priority
            style={{ background: 'var(--lightGrey)' }}
          />
        </Link>
      </div>
    </div>
  );
}
