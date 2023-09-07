import { NextSeo } from 'next-seo';

import {
  GetPostBySlugDocument,
  GetPostBySlugQuery,
  GetPostDocument,
  GetPostQuery,
  Post,
} from '@/gql/generated/graphql';
import { graphqlClient } from '@/lib/graphql-client';
import { formatDate } from '@/utils/formatters';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Head from 'next/head';

export default function PostPage({
  slug,
  title,
  excerpt,
  coverImage,
  createdAt,
  content,
  author,
}: Post) {
  return (
    <>
      <Head>
        <title>
          {process.env.NEXT_PUBLIC_SITE_NAME} - {title}
        </title>
        <meta name="description" content={excerpt} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content={coverImage.url} />
      </Head>

      <section className="container">
        <div className="post-content">
          <div className="post-header">
            <h1 className="post-title">{title}</h1>
            <p className="post-excerpt">{excerpt}</p>
            <div className="post-author-grid">
              <div className="post-author">
                <Image
                  className="post-author-picture"
                  src={author?.picture?.url}
                  alt={author?.name}
                  width={42}
                  height={42}
                />
                <small>
                  <b>{author?.name}</b>
                </small>
              </div>
              <div>
                <time>
                  <small>{formatDate(createdAt)}</small>
                </time>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="post-cover-image"
          src={coverImage?.url}
          width={coverImage.width}
          height={coverImage.height}
          alt={title}
          priority
          style={{ background: 'var(--lightGrey)' }}
        />
        <section className="post-content">
          <div
            dangerouslySetInnerHTML={{
              __html: content.html,
            }}
          />
        </section>
      </section>
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
      content: post?.content?.html,
      author: post?.author,
      coverImage: {
        url: post?.coverImage?.url,
        width: post?.coverImage?.width,
        height: post?.coverImage?.height,
      },
    },
  };
};

export async function getStaticPaths() {
  const { posts } = await graphqlClient.request<GetPostBySlugQuery>(
    GetPostBySlugDocument,
  );

  return {
    paths: posts?.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
