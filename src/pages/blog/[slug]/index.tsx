import { useGetPostQuery, ImageFit } from '@/@codegen/gql/types';
import { useRouter } from 'next/router';
import { formatDate } from '@/utils/formatters';
import Image from 'next/image';
import Head from 'next/head';
import Loading from '@/components/shared/loading';

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
