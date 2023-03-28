import {
  useGetPostsQuery,
  ImageFit,
  PostOrderByInput,
} from '@/@codegen/gql/types';
import Pagination from '@atlaskit/pagination';
import { PostCard } from '@/components/post-card';
import FeaturedPosts from '@/featured-posts';
import { formatDate } from '@/utils/formatters';
import Image from 'next/image';
import { useState } from 'react';
import CardsPostsSkeleton from './skeletons/cards-posts-skeleton';
import FeaturedPostsSkeleton from './skeletons/featured-posts-skeleton';

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

  const { data: featuredPosts, loading: featuredPostsLoading } =
    useGetPostsQuery({
      variables: {
        first: 1,
        skip: skipSlider,
        orderBy: PostOrderByInput['CreatedAtDesc'],
        coverTransformation: {
          image: {
            resize: {
              width: 640,
              height: 360,
              fit: ImageFit.Crop,
            },
          },
        },
        where: {
          tags_contains_some: ['Featured'],
        },
      },
    });

  const pageSize = dataPosts?.postsConnection.pageInfo.pageSize;

  const postsPagination = () => {
    try {
      return Array(Math.ceil(pageSize / first))
        .fill('')
        .map((_, index) => {
          return index + 1;
        });
    } catch (error) {
      return [];
    }
  };

  const sliderPagination = () => {
    try {
      return Array(Math.ceil(4))
        .fill('')
        .map((_, index) => {
          return index + 1;
        });
    } catch (error) {
      return [];
    }
  };

  return (
    <>
      <div className="blog-hero-wrapper">
        <div className="container">
          {featuredPostsLoading ? (
            <FeaturedPostsSkeleton />
          ) : (
            <>
              {featuredPosts?.posts?.map((post) => {
                return (
                  <FeaturedPosts
                    key={post.id}
                    title={post.title}
                    slug={post.slug}
                    excerpt={post.excerpt}
                    coverImage={post.coverImage?.url}
                    width={post.coverImage.width}
                    height={post.coverImage.height}
                    authorPicture={post.author?.picture?.url}
                    authorName={post.author?.name}
                    createdAt={formatDate(post.createdAt)}
                  />
                );
              })}
            </>
          )}
          <div className="featured-pagination-wrapper">
            <Pagination
              pages={sliderPagination()}
              onChange={(_, page) => {
                setSkipSlider(page - 1);
              }}
            />
          </div>
        </div>
      </div>

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
        <div className="pagination-wrapper">
          <Pagination
            pages={postsPagination()}
            onChange={(_, page) => {
              setSkip(page - 1);
            }}
          />
        </div>
      </div>
    </>
  );
}
