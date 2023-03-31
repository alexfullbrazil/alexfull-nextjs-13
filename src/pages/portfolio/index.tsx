import { useState } from 'react';
import { useGetPortfoliosQuery } from '@/@codegen/gql/types';
import Svg from '@/components/shared/svg';
import { PortfolioCard } from '@/components/pages/portfolio/portfolio-card';
import CardsPortfoliosSkeleton from '@/components/pages/portfolio/skeleton/cards-portfolios-skeleton';
import ToolTips from '@/components/shared/tooltips';

export default function Portfolio() {
  const [category, setCategory] = useState<
    'Animation' | 'Illustration Art' | 'Web/App' | 'Tutorial' | '3D Model' | ''
  >(undefined);

  const { data: dataPortfolios, loading: dataPortfoliosLoading } =
    useGetPortfoliosQuery({
      variables: {
        where: {
          category: category,
        },
      },
    });

  return (
    <>
      <div className="portfolio-page">
        <div className="portfolio-hero-wrapper">
          <div className="portfolio-hero-inner">
            <h1>
              A small <span>collection</span> of works with my{' '}
              <span>skills</span>
            </h1>
            <p>*Some content may have been changed by customers.</p>

            <div className="portfolio-category-filter-wrapper">
              <button
                className={category === 'Animation' ? 'selected' : ''}
                onClick={() => setCategory('Animation')}
              >
                Animation
              </button>
              <button
                className={category === 'Web/App' ? 'selected' : ''}
                onClick={() => setCategory('Web/App')}
              >
                Web/App
              </button>
              <button
                className={category === 'Illustration Art' ? 'selected' : ''}
                onClick={() => setCategory('Illustration Art')}
              >
                Illustration Art
              </button>
              <button
                className={category === '3D Model' ? 'selected' : ''}
                onClick={() => setCategory('3D Model')}
              >
                3D Model
              </button>
              <button
                className={category === 'Tutorial' ? 'selected' : ''}
                onClick={() => setCategory('Tutorial')}
              >
                Tutorial
              </button>
              <ToolTips
                position="top"
                content={category === undefined ? 'Select One' : 'Reset'}
                offset={14}
                background={
                  category === undefined ? 'var(--danger)' : 'var(--warning)'
                }
                color={
                  category === undefined ? 'var(--snow)' : 'var(--dark-blue)'
                }
              >
                <button
                  className={`reset ${category === undefined && 'disabled'}`}
                  onClick={() => setCategory(undefined)}
                >
                  <Svg
                    color="var(--snow)"
                    size={22}
                    src="/assets/icons/back-spin.svg"
                  />
                </button>
              </ToolTips>
            </div>
            <div className="portfolio-filtered-result-wrapper">
              <h2 className="portfolio-filtered-title">
                {category === undefined ? 'Total' : category}
              </h2>
              <h2 className="portfolio-filtered-count">
                {dataPortfolios?.portfolios.length}
              </h2>
            </div>
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
