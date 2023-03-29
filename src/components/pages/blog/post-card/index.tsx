import Image from 'next/image';
import Link from 'next/link';

interface PostCardProps {
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

export function PostCard({
  title,
  slug,
  excerpt,
  coverImage,
  authorPicture,
  authorName,
  createdAt,
  width,
  height,
}: PostCardProps) {
  return (
    <div className="post-card-item">
      <Link href={`blog/${slug}`}>
        <Image
          className="post-card-cover-image"
          src={coverImage}
          width={width}
          height={height}
          alt={title}
          priority
          style={{ background: 'var(--lightGrey)' }}
        />
      </Link>
      <div className="post-card-content">
        <Link href={`blog/${slug}`}>
          <h2 className="post-card-title">{title}</h2>
        </Link>

        <p className="post-card-excerpt">{excerpt}</p>
        <div className="post-card-footer">
          <div className="post-card-author-grid">
            <Image
              className="post-card-author-picture"
              src={authorPicture}
              alt={title}
              width={42}
              height={42}
              priority
              style={{ background: 'var(--lightGrey)' }}
            />
            <div>
              <div className="post-card-author-name">{authorName}</div>
              <time className="post-card-created-at">{createdAt}</time>
            </div>
          </div>
          <Link className="post-card-read-more" href={`blog/${slug}`}>
            More {'->'}
          </Link>
        </div>
      </div>
    </div>
  );
}
