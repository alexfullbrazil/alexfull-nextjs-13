import Svg from '@/components/shared/svg';
import ToolTips from '@/components/shared/tooltips';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME} | Home</title>
        <meta
          name="description"
          content="A FullStack App with Hygraph, Next.JS 13 & Apollo GraphQL"
        />
        <meta
          property="og:description"
          content="A FullStack App with Hygraph, Next.JS 13 & Apollo GraphQL"
        />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>
      <main className="page-home-wrapper">
        <div className="home-hero-wrapper">
          <div className="home-hero-content">
            <h1>A FullStack App with Hygraph, Next.JS 13 & Apollo GraphQL</h1>
            <p>
              Featuring Hygraph, a Native GraphQL Headless CMS, GraphQL Code
              Generator, Awesome Custom Components, SCSS Auto Convert Pixel to
              REM/EM and much more.
            </p>
            <Link href={'/blog'} className="home-hero-cta">
              See in action
            </Link>
            <div className="home-hero-logos-wrapper">
              <ToolTips
                content="Learn More ->"
                position="top"
                offset={20}
                background={'var(--danger)'}
              >
                <a target={'_blank'} href="https://nextjs.org/">
                  <Svg color="var(--dark-blue)" src="assets/logos/next.svg" />
                </a>
              </ToolTips>
              <ToolTips
                content="Learn More ->"
                position="top"
                offset={20}
                background={'var(--danger)'}
              >
                <a target={'_blank'} href="https://hygraph.com/">
                  <Svg
                    color="var(--dark-blue)"
                    src="assets/logos/hygraph.svg"
                  />
                </a>
              </ToolTips>

              <ToolTips
                content="Learn More ->"
                position="top"
                offset={20}
                background={'var(--danger)'}
              >
                <a target={'_blank'} href="https://www.apollographql.com/">
                  <Svg color="var(--dark-blue)" src="assets/logos/apollo.svg" />
                </a>
              </ToolTips>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
