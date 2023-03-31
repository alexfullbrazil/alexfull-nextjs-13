import { useState } from 'react';
import {
  ImageFit,
  PostOrderByInput,
  useGetPostsQuery,
} from '@/@codegen/gql/types';
import FeaturedPosts from '@/components/pages/blog/featured-posts';
import { PostCard } from '@/components/pages/blog/post-card';
import SearchResults from '@/components/pages/blog/search/search-results';
import CardsPostsSkeleton from '@/components/pages/blog/skeletons/cards-posts-skeleton';
import FeaturedPostsSkeleton from '@/components/pages/blog/skeletons/featured-posts-skeleton';
import Modal from '@/components/shared/modal';
import SearchBox from '@/components/shared/search-box';
import Svg from '@/components/shared/svg';
import ToolTips from '@/components/shared/tooltips';
import { formatDate } from '@/utils/formatters';
import Pagination from '@atlaskit/pagination';

export default function Blog() {
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

  const { data: searchPosts } = useGetPostsQuery({
    variables: {
      orderBy: PostOrderByInput[orderBy],
      coverTransformation: {
        image: {
          resize: {
            width: 60,
            height: 60,
            fit: ImageFit.Crop,
          },
        },
      },
      where: {
        _search: search,
      },
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

  const toggleModal = () => {
    setModal(!modal);
    setSearch(null);
    !modal
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  };

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
      {modal && (
        <Modal align="flex-start" marginTop={80} flat>
          <div>
            <SearchBox
              value={search === null ? '' : search}
              placeholder="Search..."
              onClick={() => {
                setSearch(null);
              }}
              onChange={(e) => {
                setSearch(e.target.value);
                if (e.target.value === '') {
                  setSearch(null);
                }
              }}
            />
          </div>
          <div className="search-results-wrapper">
            <ul>
              {searchPosts?.posts?.map((post) => {
                return (
                  <SearchResults
                    key={post.id}
                    title={post.title}
                    slug={post.slug}
                    excerpt={post.excerpt}
                    coverImage={post.coverImage?.url}
                    authorPicture={post.author?.picture?.url}
                    authorName={post.author?.name}
                    createdAt={formatDate(post.createdAt)}
                    onClick={toggleModal}
                  />
                );
              })}
            </ul>
          </div>
          <div className="search-results-footer">
            {searchPosts?.posts?.length !== 0 && (
              <span>
                {searchPosts?.posts?.length}{' '}
                {searchPosts?.posts?.length === 1 ? 'Result' : 'Results'}
              </span>
            )}
            <button
              className="search-results-close-modal"
              onClick={toggleModal}
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}

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
        <div className="post-card-actions">
          <ToolTips
            contentW={110}
            content="ASC | DESC"
            position="right"
            offset={20}
          >
            <div>
              <button
                disabled={orderBy === 'CreatedAtDesc'}
                onClick={() => setOrderBy('CreatedAtDesc')}
              >
                <Svg
                  src="/assets/icons/sort-desc.svg"
                  size={28}
                  color="var(--dark-blue)"
                />
              </button>
              <button
                disabled={orderBy === 'CreatedAtAsc'}
                onClick={() => setOrderBy('CreatedAtAsc')}
              >
                <Svg
                  src="/assets/icons/sort-asc.svg"
                  size={28}
                  color="var(--dark-blue)"
                />
              </button>
            </div>
          </ToolTips>
          <ToolTips content="Search" position="left" offset={20}>
            <button onClick={toggleModal}>
              <Svg
                src="/assets/icons/search.svg"
                size={28}
                color="var(--dark-blue)"
              />
            </button>
          </ToolTips>
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
