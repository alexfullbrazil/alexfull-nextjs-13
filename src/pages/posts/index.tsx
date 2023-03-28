import {
  useGetPostsQuery,
  ImageFit,
  PostOrderByInput,
} from '@/@codegen/gql/types';
import { PostCard } from '@/components/post-card';
import { formatDate } from '@/utils/formatters';
import Image from 'next/image';
import { useState } from 'react';
import CardsPostsSkeleton from './skeletons/cards-posts-skeleton';

export default function Posts() {
  const [orderBy, setOrderBy] = useState<'CreatedAtDesc' | 'CreatedAtAsc'>(
    'CreatedAtDesc',
  );
  const [search, setSearch] = useState('' || null);
  const [modal, setModal] = useState<boolean>(false);
  const [skip, setSkip] = useState<number>(0);
  const [skipSlider, setSkipSlider] = useState<number>(0);
  const [first, setFirst] = useState<number>(3);

  const { data: dataPosts, loading: dataPostsLoading } = useGetPostsQuery({
    variables: {
      coverTransformation: {
        image: {
          resize: {
            width: 640,
            height: 360,
            fit: ImageFit.Crop,
          },
        },
      },
      avatarTransformation: {
        image: {
          resize: {
            width: 60,
            height: 60,
            fit: ImageFit.Crop,
          },
        },
      },
      first: first,
      skip: skip * first,
      orderBy: PostOrderByInput[orderBy],
    },
  });

  return (
    <>
      <div className="container">
        <div className="post-card-wrapper">
          {dataPostsLoading ? (
            <>
              {Array.from({ length: first }, (_, index) => (
                <CardsPostsSkeleton key={index} />
              ))}
            </>
          ) : (
            <>
              {dataPosts?.posts?.map((post) => {
                return (
                  <PostCard
                    key={post.id}
                    title={post.title}
                    slug={post.slug}
                    excerpt={post.excerpt}
                    coverImage={post.coverImage?.url}
                    authorPicture={post.author?.picture?.url}
                    authorName={post.author?.name}
                    createdAt={formatDate(post.createdAt)}
                    width={post.coverImage.width}
                    height={post.coverImage.height}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}
