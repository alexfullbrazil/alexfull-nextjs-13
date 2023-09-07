import { gql } from '@apollo/client';

export const GetPosts = gql(/* GraphQL */ `
  query getPosts(
    $skip: Int
    $orderBy: PostOrderByInput
    $coverTransformation: AssetTransformationInput
    $avatarTransformation: AssetTransformationInput
    $where: PostWhereInput
    $first: Int
  ) {
    posts(skip: $skip, orderBy: $orderBy, where: $where, first: $first) {
      id
      title
      excerpt
      createdAt
      slug
      coverImage {
        url(transformation: $coverTransformation)
        width
        height
      }
      author {
        name
        picture {
          url(transformation: $avatarTransformation)
        }
      }
      content {
        html
      }
      tags
    }
    postsConnection {
      pageInfo {
        pageSize
      }
    }
  }
`);

export const GetPost = gql(/* GraphQL */ `
  query getPost(
    $where: PostWhereUniqueInput!
    $coverTransformation: AssetTransformationInput
    $avatarTransformation: AssetTransformationInput
  ) {
    post(where: $where) {
      id
      title
      excerpt
      createdAt
      slug
      content {
        html
      }
      coverImage {
        url(transformation: $coverTransformation)
        width
        height
      }
      author {
        name
        picture {
          url(transformation: $avatarTransformation)
          width
          height
        }
      }
      tags
    }
  }
`);

export const GetPostBySlug = gql(/* GraphQL */ `
  query getPostBySlug {
    posts {
      slug
    }
  }
`);
