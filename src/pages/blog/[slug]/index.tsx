import { NextSeo } from 'next-seo';

import {
  useGetPostQuery,
  ImageFit,
  GetPostsQuery,
  useGetPostsQuery,
  GetPostDocument,
  GetPostsDocument,
  GetPostQuery,
} from '@/gql/generated/graphql';
import { client } from '@/contexts/graphql-context';
import { useRouter } from 'next/router';
import { formatDate } from '@/utils/formatters';
import Image from 'next/image';
import Head from 'next/head';
import Loading from '@/components/shared/loading';
import { GetStaticPaths, GetStaticProps } from 'next';
import { gql } from '@apollo/client';
import { GetPost, GetPosts } from '@/gql/docs/posts/posts';
import { graphqlClient } from '@/lib/graphql-client';

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;

  const { data: dataPost, loading } = useGetPostQuery({
    variables: {
      where: {
        slug: slug as string,
      },
      coverTransformation: {
        image: {
          resize: {
            width: 1280,
            height: 720,
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
    },
  });

  return (
    <>
      <Head>
        <title>
          {process.env.NEXT_PUBLIC_SITE_NAME} | {dataPost?.post.title}
        </title>
        <meta name="description" content={dataPost?.post?.excerpt} />
        <meta property="og:title" content={dataPost?.post.title} />
        <meta property="og:description" content={dataPost?.post?.excerpt} />
        <meta property="og:image" content={dataPost?.post.coverImage.url} />
      </Head>

      <NextSeo
        title={dataPost?.post.title}
        description={dataPost?.post?.excerpt}
        canonical="https://www.alexfull.com/"
        openGraph={{
          url: 'https://www.alexfull.com',
          title: 'AlexFull Brazil',
          description:
            'A FullStack App with Hygraph, Next.JS 13 & Apollo GraphQL',
          images: [
            {
              url: dataPost?.post?.coverImage?.url,
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: dataPost?.post?.coverImage?.url,
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          siteName: 'AlexFull',
        }}
      />

      {loading ? (
        <Loading />
      ) : (
        <>
          <section className="container">
            <div className="post-content">
              <div className="post-header">
                <h1 className="post-title">{dataPost?.post?.title}</h1>
                <p className="post-excerpt">{dataPost?.post?.excerpt}</p>
                <div className="post-author-grid">
                  <div className="post-author">
                    <Image
                      className="post-author-picture"
                      src={dataPost?.post?.author?.picture?.url}
                      alt={dataPost?.post?.author?.name}
                      width={42}
                      height={42}
                    />
                    <small>
                      <b>{dataPost?.post?.author?.name}</b>
                    </small>
                  </div>
                  <div>
                    <time>
                      <small>{formatDate(dataPost?.post?.createdAt)}</small>
                    </time>
                  </div>
                </div>
              </div>
            </div>
            <Image
              className="post-cover-image"
              src={dataPost?.post?.coverImage?.url}
              width={dataPost?.post.coverImage.width}
              height={dataPost?.post.coverImage.height}
              alt={dataPost?.post?.title}
              priority
              style={{ background: 'var(--lightGrey)' }}
            />
            <section className="post-content">
              <div
                dangerouslySetInnerHTML={{
                  __html: dataPost?.post?.content.html,
                }}
              />
            </section>
          </section>
        </>
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { post } = await graphqlClient.request<GetPostQuery>(GetPostDocument, {
    where: {
      slug: params.slug,
    },
  });

  if (!post) return { notFound: true };

  return {
    revalidate: 60,
    props: {
      slug: post?.slug,
      title: post?.title,
      excerpt: post?.excerpt,
      coverImage: {
        url: post?.coverImage?.url,
      },
    },
  };
};

export async function getStaticPaths() {
  const { posts } = await graphqlClient.request<GetPostsQuery>(
    GetPostsDocument,
    {
      first: 20,
    },
  );

  return {
    paths: posts?.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: true,
  };
}
