import {
  ImageFit,
  PostOrderByInput,
  useGetPostsQuery,
  useGetPortfoliosQuery,
} from '@/@codegen/gql/types';
import Icon from '@/components/icon';
import { PostCard } from '@/components/post-card';
import { useEffect, useState } from 'react';

import Pagination from '@atlaskit/pagination';
import Modal from '@/components/modal';
import ToolTips from '@/components/tooltips';

import CardsPostsSkeleton from '../posts/skeletons/cards-posts-skeleton';
import FeaturedPostsSkeleton from '../posts/skeletons/featured-posts-skeleton';
import { PortfolioCard } from '@/components/portfolio-card';

import CardsPortfoliosSkeleton from '@/components/portfolio-card/skeleton/cards.portfolios-skeleton';
import { PortfolioWhereInput } from '@/@codegen/gql/types';

export default function Portfolio() {
  const [category, setCategory] = useState<
    'Animation' | 'Illustration Art' | 'Web/App' | 'Tutorial' | '3D Model'
  >(undefined);
  const [search, setSearch] = useState('' || null);
  const [modal, setModal] = useState<boolean>(false);
  const [skip, setSkip] = useState<number>(0);
  const [skipSlider, setSkipSlider] = useState<number>(0);
  const [first, setFirst] = useState<number>(3);

  const { data: dataPortfolios, loading: dataPortfoliosLoading } =
    useGetPortfoliosQuery({
      variables: {
        where: {
          category: category,
        },
      },
    });

  const toggleModal = () => {
    setModal(!modal);
    setSearch(null);
    if (!modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <>
      <div className="portfolio-page">
        <div className="portfolio-hero-wrapper">
          <div className="portfolio-hero-inner">
            <h1>
              A small <span>collection</span> of works with my{' '}
              <span>skills</span>.
            </h1>

            <div className="portfolio-category-filter-wrapper">
              <button
                className={category === 'Animation' ? 'selected' : ''}
                onClick={() => setCategory('Animation')}
              >
                Animation
              </button>
              <button
                className={category == 'Web/App' ? 'selected' : ''}
                onClick={() => setCategory('Web/App')}
              >
                Web/App
              </button>
              <button
                className={category == 'Illustration Art' ? 'selected' : ''}
                onClick={() => setCategory('Illustration Art')}
              >
                Illustration Art
              </button>
              <button
                className={category == '3D Model' ? 'selected' : ''}
                onClick={() => setCategory('3D Model')}
              >
                3D Model
              </button>
              <button
                className={category == 'Tutorial' ? 'selected' : ''}
                onClick={() => setCategory('Tutorial')}
              >
                Tutorial
              </button>
            </div>
            <button
              className={`reset ${category == undefined && 'disabled'}`}
              onClick={() => setCategory(undefined)}
            >
              Reset Filter{' '}
              <Icon color="var(--darkBlue)" size={22} file="back-spin" />
            </button>
          </div>
        </div>

        <div className="container">
          <div className="portfolio-card-wrapper">
            {dataPortfoliosLoading ? (
              <>
                {Array.from(
                  {
                    length:
                      dataPortfolios?.portfoliosConnection.pageInfo.pageSize,
                  },
                  (_, index) => (
                    <CardsPortfoliosSkeleton key={index} />
                  ),
                )}
              </>
            ) : (
              <>
                {dataPortfolios?.portfolios.map((item) => {
                  return (
                    <PortfolioCard
                      key={item.id}
                      category={item?.category}
                      title={item?.title}
                      tools={item?.tools}
                      skills={item?.skills}
                      client={item?.client}
                      kind={item?.kind}
                      link={item?.link}
                      buttonText={item?.buttonText}
                      external={item?.external}
                      modal={item?.modal}
                      cardImage={item?.cardImage.url}
                      width={379}
                      height={379}
                    />
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
